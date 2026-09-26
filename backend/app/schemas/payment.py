from typing import Optional
from pydantic import BaseModel, EmailStr

class CreateOrderRequest(BaseModel):
    userEmail: EmailStr

class CreateOrderResponse(BaseModel):
    success: bool
    orderId: str
    amount: int  # in paise (e.g. 19900)
    currency: str
    keyId: str

class VerifyPaymentRequest(BaseModel):
    userEmail: EmailStr
    razorpay_payment_id: Optional[str] = None
    razorpay_order_id: Optional[str] = None
    razorpay_signature: Optional[str] = None

class PaymentVerifyResponse(BaseModel):
    success: bool
    message: str
    paymentId: Optional[str] = None
