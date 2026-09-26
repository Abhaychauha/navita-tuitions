from typing import Optional, List
from pydantic import BaseModel

class WorksheetResponse(BaseModel):
    id: str
    title: str
    grade: str
    board: str
    subject: str
    topic: str
    description: Optional[str] = None
    isFree: bool
    pagesCount: int
    questionsCount: int
    difficulty: str
    downloadUrl: Optional[str] = None
