from typing import Optional, Any
from pydantic import BaseModel, Field, EmailStr, field_validator
import re

class EnquiryCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=150, description="Parent or Student Name")
    studentGrade: str = Field(..., min_length=1, description="Grade/Standard")
    board: str = Field(..., min_length=1, description="Curriculum Board")
    subjects: str = Field(..., min_length=1, description="Required Subjects")
    mode: Optional[str] = Field("Offline Tuition", description="Preferred Tuition Mode")
    phone: str = Field(..., description="10-digit Indian Mobile Phone")
    email: Optional[str] = Field(None, description="Optional parent/student email")
    message: Optional[str] = Field(None, max_length=2000, description="Additional learning questions or details")

    @field_validator("phone")
    @classmethod
    def validate_phone(cls, v: str) -> str:
        cleaned = re.sub(r"\D", "", v)
        if len(cleaned) == 10 and re.match(r"^[6-9]\d{9}$", cleaned):
            return cleaned
        if len(cleaned) == 12 and cleaned.startswith("91") and re.match(r"^[6-9]", cleaned[2:]):
            return cleaned[2:]
        raise ValueError("Please provide a valid 10-digit Indian mobile number (e.g. 9876543210).")

    @field_validator("email")
    @classmethod
    def validate_email_optional(cls, v: Optional[str]) -> Optional[str]:
        if not v or v.strip() == "":
            return None
        v = v.strip().lower()
        if not re.match(r"^[^\s@]+@[^\s@]+\.[^\s@]+$", v):
            raise ValueError("Please provide a valid email address.")
        return v

class EnquiryResponse(BaseModel):
    id: str
    name: str
    studentGrade: str
    board: str
    subjects: str
    mode: str
    phone: str
    email: Optional[str]
    message: Optional[str]
    status: str
    createdAt: str

class APIResponse(BaseModel):
    success: bool
    message: str
    enquiryId: Optional[str] = None
    data: Optional[Any] = None
