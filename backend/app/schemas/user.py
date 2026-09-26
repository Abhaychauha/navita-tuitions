from typing import Optional, List
from pydantic import BaseModel, EmailStr, Field

class UserRegister(BaseModel):
    name: str = Field(..., min_length=2, max_length=150)
    email: EmailStr
    password: Optional[str] = Field("NavitaStudent@2026", min_length=6)
    phone: Optional[str] = None
    grade: Optional[str] = None
    board: Optional[str] = None

class UserLogin(BaseModel):
    email: EmailStr
    password: Optional[str] = None

class UserResponse(BaseModel):
    id: str
    name: str
    email: str
    phone: Optional[str] = None
    grade: Optional[str] = None
    board: Optional[str] = None
    accessStatus: str  # "free" or "paid"
    unlockedWorksheetIds: List[str]
    token: Optional[str] = None
    createdAt: Optional[str] = None

class AuthResponse(BaseModel):
    success: bool
    message: str
    user: Optional[UserResponse] = None
    token: Optional[str] = None
