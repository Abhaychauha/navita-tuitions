import datetime
import uuid
from sqlalchemy import Column, String, Integer, Float, DateTime
from app.database.session import Base

class Payment(Base):
    __tablename__ = "payments"

    id = Column(String(60), primary_key=True, default=lambda: f"pay_{uuid.uuid4().hex[:12].upper()}")
    user_id = Column(String(50), nullable=False)
    user_email = Column(String(150), nullable=False)
    amount = Column(Float, nullable=False)  # in INR (e.g. 199.0)
    currency = Column(String(10), default="INR")
    plan_name = Column(String(100), default="All-Access Complete Library Pass")
    status = Column(String(30), default="captured")
    razorpay_order_id = Column(String(100), nullable=True)
    razorpay_payment_id = Column(String(100), nullable=True)
    razorpay_signature = Column(String(255), nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
