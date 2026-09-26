import os
from pathlib import Path
from dotenv import load_dotenv

env_path = Path(__file__).resolve().parent.parent / '.env'
load_dotenv(dotenv_path=env_path)

class Settings:
    PROJECT_NAME: str = "Navita Tuitions API"
    VERSION: str = "2.0.0"
    DESCRIPTION: str = "Production FastAPI Backend for Navita Tuitions - Enquiries, Authentication, Worksheets, and Payments"
    
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./navita.db")
    SECRET_KEY: str = os.getenv("SECRET_KEY", "navita-tuitions-padmanabhanagar-secret-key-2026")
    ALGORITHM: str = os.getenv("ALGORITHM", "HS256")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "43200"))
    
    _raw_origins = os.getenv("FRONTEND_URL", "http://localhost:3000,http://127.0.0.1:3000,http://localhost:5173,http://127.0.0.1:5173")
    ALLOWED_ORIGINS: list[str] = [origin.strip() for origin in _raw_origins.split(",") if origin.strip()]
    
    RAZORPAY_KEY_ID: str = os.getenv("RAZORPAY_KEY_ID", "rzp_test_placeholder_key")
    RAZORPAY_KEY_SECRET: str = os.getenv("RAZORPAY_KEY_SECRET", "rzp_test_placeholder_secret")

settings = Settings()
