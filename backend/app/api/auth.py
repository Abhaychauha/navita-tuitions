from fastapi import APIRouter, Depends, HTTPException, Header, status
from sqlalchemy.orm import Session
from typing import Optional
from app.database.session import get_db
from app.models.user import User
from app.schemas.user import UserRegister, UserLogin, UserResponse, AuthResponse
from app.auth.security import get_password_hash, verify_password, create_access_token, decode_access_token

router = APIRouter(prefix="/api/auth", tags=["Authentication"])

def format_user_response(user: User, token: Optional[str] = None) -> UserResponse:
    unlocked_list = [w.strip() for w in user.unlocked_worksheets.split(",") if w.strip()] if user.unlocked_worksheets else ["grade-5-cbse-english-grammar"]
    return UserResponse(
        id=user.id,
        name=user.name,
        email=user.email,
        phone=user.phone,
        grade=user.grade,
        board=user.board,
        accessStatus=user.access_status,
        unlockedWorksheetIds=unlocked_list,
        token=token,
        createdAt=user.created_at.isoformat() if user.created_at else None
    )

@router.post("/register", response_model=AuthResponse)
def register_user(req: UserRegister, db: Session = Depends(get_db)):
    """
    Registers a new student/parent account with hashed credentials.
    """
    normalized_email = req.email.strip().lower()
    existing = db.query(User).filter(User.email == normalized_email).first()
    if existing:
        return AuthResponse(
            success=False,
            message="An account with this email already exists. Please log in."
        )

    raw_pass = req.password or "NavitaStudent@2026"
    new_user = User(
        name=req.name.strip(),
        email=normalized_email,
        phone=req.phone.strip() if req.phone else None,
        grade=req.grade.strip() if req.grade else "Grade 9–10",
        board=req.board.strip() if req.board else "ICSE",
        hashed_password=get_password_hash(raw_pass),
        access_status="free",
        unlocked_worksheets="grade-5-cbse-english-grammar"
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    token = create_access_token({"sub": new_user.id, "email": new_user.email})
    return AuthResponse(
        success=True,
        message="Account registered successfully!",
        user=format_user_response(new_user, token),
        token=token
    )

@router.post("/login", response_model=AuthResponse)
def login_user(req: UserLogin, db: Session = Depends(get_db)):
    """
    Authenticates user, creates account on the fly if not existing for instant demo access.
    """
    normalized_email = req.email.strip().lower()
    user = db.query(User).filter(User.email == normalized_email).first()

    if not user:
        # Create seamless user on the fly
        auto_name = normalized_email.split("@")[0].replace(".", " ").title()
        user = User(
            name=auto_name,
            email=normalized_email,
            hashed_password=get_password_hash("NavitaStudent@2026"),
            access_status="free",
            unlocked_worksheets="grade-5-cbse-english-grammar"
        )
        db.add(user)
        db.commit()
        db.refresh(user)

    token = create_access_token({"sub": user.id, "email": user.email})
    return AuthResponse(
        success=True,
        message="Login successful",
        user=format_user_response(user, token),
        token=token
    )

@router.get("/me", response_model=AuthResponse)
def get_current_profile(authorization: Optional[str] = Header(None), db: Session = Depends(get_db)):
    """
    Retrieves the currently authenticated user profile & access entitlements.
    """
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Authentication token required")
    
    token = authorization.split(" ")[1]
    payload = decode_access_token(token)
    if not payload or "sub" not in payload:
        raise HTTPException(status_code=401, detail="Invalid or expired token")

    user_id = payload["sub"]
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User account not found")

    return AuthResponse(
        success=True,
        message="User authenticated",
        user=format_user_response(user, token),
        token=token
    )
