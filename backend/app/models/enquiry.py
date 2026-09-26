import datetime
import uuid
from sqlalchemy import Column, String, Text, DateTime
from app.database.session import Base

class Enquiry(Base):
    __tablename__ = "enquiries"

    id = Column(String(50), primary_key=True, default=lambda: f"ENQ-{uuid.uuid4().hex[:8].upper()}")
    name = Column(String(150), nullable=False)
    student_grade = Column(String(100), nullable=False)
    board = Column(String(100), nullable=False)
    subjects = Column(String(200), nullable=False)
    mode = Column(String(50), default="Offline Tuition")
    phone = Column(String(30), nullable=False)
    email = Column(String(150), nullable=True)
    message = Column(Text, nullable=True)
    status = Column(String(30), default="new")
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
