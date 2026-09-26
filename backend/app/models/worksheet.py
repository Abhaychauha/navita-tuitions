import datetime
from sqlalchemy import Column, String, Integer, Boolean, Text, DateTime
from app.database.session import Base

class Worksheet(Base):
    __tablename__ = "worksheets"

    id = Column(String(100), primary_key=True)
    title = Column(String(255), nullable=False)
    grade = Column(String(50), nullable=False)
    board = Column(String(50), nullable=False)
    subject = Column(String(100), nullable=False)
    topic = Column(String(200), nullable=False)
    description = Column(Text, nullable=True)
    is_free = Column(Boolean, default=False)
    pages_count = Column(Integer, default=1)
    questions_count = Column(Integer, default=10)
    difficulty = Column(String(50), default="Medium")
    pdf_filename = Column(String(200), nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
