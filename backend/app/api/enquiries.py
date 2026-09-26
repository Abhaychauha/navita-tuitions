from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from app.database.session import get_db
from app.models.enquiry import Enquiry
from app.schemas.enquiry import EnquiryCreate, EnquiryResponse, APIResponse

router = APIRouter(prefix="/api/enquiries", tags=["Enquiries"])

@router.post("", response_model=APIResponse, status_code=status.HTTP_201_CREATED)
def create_enquiry(enquiry_in: EnquiryCreate, db: Session = Depends(get_db)):
    """
    Submits and stores a student/parent consultation or admission enquiry.
    Validates name, 10-digit Indian phone number, and curriculum details.
    """
    try:
        new_enquiry = Enquiry(
            name=enquiry_in.name.strip(),
            student_grade=enquiry_in.studentGrade.strip(),
            board=enquiry_in.board.strip(),
            subjects=enquiry_in.subjects.strip(),
            mode=enquiry_in.mode or "Offline Tuition",
            phone=enquiry_in.phone.strip(),
            email=enquiry_in.email.strip().lower() if enquiry_in.email else None,
            message=enquiry_in.message.strip() if enquiry_in.message else None,
            status="new"
        )
        db.add(new_enquiry)
        db.commit()
        db.refresh(new_enquiry)

        return APIResponse(
            success=True,
            message="Thank you! Your enquiry has been received. Our team will get in touch with you shortly.",
            enquiryId=new_enquiry.id
        )
    except Exception as exc:
        db.rollback()
        # Return friendly message without leaking internal trace
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Unable to submit your enquiry right now. Please try again or contact us directly at 088672 87115."
        )

@router.get("", response_model=List[EnquiryResponse])
def list_enquiries(skip: int = 0, limit: int = 50, db: Session = Depends(get_db)):
    """
    Lists recent enquiries for administrative management.
    """
    items = db.query(Enquiry).order_by(Enquiry.created_at.desc()).offset(skip).limit(limit).all()
    return [
        EnquiryResponse(
            id=item.id,
            name=item.name,
            studentGrade=item.student_grade,
            board=item.board,
            subjects=item.subjects,
            mode=item.mode or "Offline Tuition",
            phone=item.phone,
            email=item.email,
            message=item.message,
            status=item.status,
            createdAt=item.created_at.isoformat() if item.created_at else ""
        )
        for item in items
    ]
