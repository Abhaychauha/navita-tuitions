import datetime
import uuid
from sqlalchemy import Column, String, Text, DateTime
from app.database.session import Base

class User(Base):
    __tablename__ = "users"

    id = Column(String(50), primary_key=True, default=lambda: f"usr_{uuid.uuid4().hex[:10]}")
    name = Column(String(150), nullable=False)
    email = Column(String(150), unique=True, index=True, nullable=False)
    phone = Column(String(30), nullable=True)
    grade = Column(String(50), nullable=True)
    board = Column(String(50), nullable=True)
    hashed_password = Column(String(255), nullable=False)
    access_status = Column(String(20), default="free")  # "free" or "paid"
    unlocked_worksheets = Column(Text, default="grade-5-cbse-english-grammar")  # comma-separated IDs or '*'
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
