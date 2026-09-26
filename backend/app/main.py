from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from app.config import settings
from app.database.session import engine, Base, SessionLocal
from app.models.user import User
from app.auth.security import get_password_hash
from app.api import enquiries, auth, payments, worksheets

# Initialize SQLite database tables
Base.metadata.create_all(bind=engine)

def seed_demo_users():
    db = SessionLocal()
    try:
        # Seed free demo user
        free_user = db.query(User).filter(User.email == "free_user@example.com").first()
        if not free_user:
            free_user = User(
                id="user_free_demo",
                name="Demo Free Student",
                email="free_user@example.com",
                phone="9876543210",
                grade="Grade 5",
                board="CBSE",
                hashed_password=get_password_hash("Student@123"),
                access_status="free",
                unlocked_worksheets="grade-5-cbse-english-grammar"
            )
            db.add(free_user)

        # Seed paid demo user
        paid_user = db.query(User).filter(User.email == "paid_user@example.com").first()
        if not paid_user:
            paid_user = User(
                id="user_paid_demo",
                name="Priya Sharma (Paid Member)",
                email="paid_user@example.com",
                phone="9886728711",
                grade="Grade 10",
                board="ICSE",
                hashed_password=get_password_hash("Student@123"),
                access_status="paid",
                unlocked_worksheets="*"
            )
            db.add(paid_user)
        db.commit()
    except Exception as e:
        db.rollback()
        print(f"Error seeding demo users: {e}")
    finally:
        db.close()

seed_demo_users()

# Instantiate FastAPI App
app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description=settings.DESCRIPTION,
    docs_url="/docs",
    redoc_url="/redoc"
)

# Configure CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global Validation Error Handler returning clean JSON
@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    errors = exc.errors()
    first_error = errors[0] if errors else {}
    msg = first_error.get("msg", "Invalid request parameters.")
    field = first_error.get("loc", [""])[-1]
    if "Value error," in msg:
        msg = msg.replace("Value error, ", "")
    return JSONResponse(
        status_code=422,
        content={"success": False, "message": f"{msg}" if field in ("phone", "email", "name") else msg}
    )

# Include API Sub-routers
app.include_router(enquiries.router)
app.include_router(auth.router)
app.include_router(payments.router)
app.include_router(worksheets.router)

@app.get("/", tags=["Health"])
def root():
    return {
        "project": settings.PROJECT_NAME,
        "version": settings.VERSION,
        "status": "online",
        "docs": "/docs",
        "centre": "Padmanabhanagar, Bengaluru"
    }

@app.get("/health", tags=["Health"])
def health_check():
    return {
        "status": "healthy",
        "service": "Navita Tuitions FastAPI Backend",
        "database": "connected"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="127.0.0.1", port=8000, reload=True)
