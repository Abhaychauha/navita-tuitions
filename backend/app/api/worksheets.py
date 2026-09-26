from fastapi import APIRouter, Depends, HTTPException, Header, status
from sqlalchemy.orm import Session
from typing import List, Optional
from app.database.session import get_db
from app.models.worksheet import Worksheet
from app.models.user import User
from app.schemas.worksheet import WorksheetResponse
from app.auth.security import decode_access_token

router = APIRouter(prefix="/api/worksheets", tags=["Worksheets"])

DEFAULT_WORKSHEETS = [
    {
        "id": "grade-10-science-light-reflection-refraction",
        "title": "Grade 10 Science: Light – Reflection & Refraction (Ray Diagrams & Numericals)",
        "grade": "Grade 10",
        "board": "CBSE",
        "subject": "Science (Physics)",
        "topic": "Light Reflection & Refraction",
        "description": "Comprehensive 3-page worksheet covering spherical mirrors, lens formula, Snell's law, refractive index, and ray diagrams with full numericals.",
        "is_free": False,
        "pages_count": 3,
        "questions_count": 18,
        "difficulty": "Advanced",
        "pdf_filename": "Grade10_Science_Light_Reflection.pdf"
    },
    {
        "id": "grade-7-icse-math-integers-fractions",
        "title": "Grade 7 ICSE Mathematics: Integers, Fractions & BODMAS Foundations",
        "grade": "Grade 7",
        "board": "ICSE",
        "subject": "Mathematics",
        "topic": "Integers, Rational Numbers & Operations",
        "description": "Multi-step bracket simplification, negative integers arithmetic, word problems on fractions, and reciprocal rules.",
        "is_free": False,
        "pages_count": 2,
        "questions_count": 15,
        "difficulty": "Medium",
        "pdf_filename": "Grade7_ICSE_Math_Integers.pdf"
    },
    {
        "id": "grade-6-cbse-math-knowing-our-numbers",
        "title": "Grade 6 CBSE Mathematics: Knowing Our Numbers & Roman Numerals",
        "grade": "Grade 6",
        "board": "CBSE",
        "subject": "Mathematics",
        "topic": "Number Systems & Estimation",
        "description": "Indian vs International place value systems, estimation to nearest tens/hundreds, large numbers word problems, and Roman numerals.",
        "is_free": False,
        "pages_count": 2,
        "questions_count": 14,
        "difficulty": "Easy to Medium",
        "pdf_filename": "Grade6_CBSE_Math_Numbers.pdf"
    },
    {
        "id": "grade-5-cbse-english-grammar",
        "title": "Grade 5 CBSE English: Tenses, Prepositions & Sentence Structure (Free Sample)",
        "grade": "Grade 5",
        "board": "CBSE",
        "subject": "English Grammar",
        "topic": "Tenses & Parts of Speech",
        "description": "Complete 3-page grammar revision worksheet covering simple past vs present continuous, prepositions of time/place, active voice, and paragraph editing.",
        "is_free": True,
        "pages_count": 3,
        "questions_count": 20,
        "difficulty": "Easy to Medium",
        "pdf_filename": "Grade5_CBSE_English_Grammar.pdf"
    },
    {
        "id": "grade-1-evs-my-body-senses",
        "title": "Grade 1 EVS: My Body, Sense Organs & Healthy Habits",
        "grade": "Grade 1",
        "board": "CBSE / ICSE",
        "subject": "Environmental Studies (EVS)",
        "topic": "Human Body & Senses",
        "description": "Illustrated worksheet with match-the-column, sense organ identification, good habits vs bad habits, and healthy eating classification.",
        "is_free": False,
        "pages_count": 2,
        "questions_count": 12,
        "difficulty": "Beginner",
        "pdf_filename": "Grade1_EVS_Body_Senses.pdf"
    },
    {
        "id": "grade-8-icse-math-direct-inverse-variation",
        "title": "Grade 8 ICSE Mathematics: Direct & Inverse Variations (Word Problems)",
        "grade": "Grade 8",
        "board": "ICSE",
        "subject": "Mathematics",
        "topic": "Variation & Unitary Method",
        "description": "Tabular variation problems, constant of variation (k), speed-time-distance relationships, and multi-worker unitary calculations.",
        "is_free": False,
        "pages_count": 2,
        "questions_count": 12,
        "difficulty": "Medium to Hard",
        "pdf_filename": "Grade8_ICSE_Math_Variation.pdf"
    }
]

def seed_worksheets(db: Session):
    for ws_data in DEFAULT_WORKSHEETS:
        existing = db.query(Worksheet).filter(Worksheet.id == ws_data["id"]).first()
        if not existing:
            ws = Worksheet(
                id=ws_data["id"],
                title=ws_data["title"],
                grade=ws_data["grade"],
                board=ws_data["board"],
                subject=ws_data["subject"],
                topic=ws_data["topic"],
                description=ws_data["description"],
                is_free=ws_data["is_free"],
                pages_count=ws_data["pages_count"],
                questions_count=ws_data["questions_count"],
                difficulty=ws_data["difficulty"],
                pdf_filename=ws_data["pdf_filename"]
            )
            db.add(ws)
    db.commit()

@router.get("", response_model=List[WorksheetResponse])
def get_worksheets(db: Session = Depends(get_db)):
    """
    Returns full catalogue of worksheets with metadata and access designations.
    """
    seed_worksheets(db)
    items = db.query(Worksheet).all()
    return [
        WorksheetResponse(
            id=item.id,
            title=item.title,
            grade=item.grade,
            board=item.board,
            subject=item.subject,
            topic=item.topic,
            description=item.description,
            isFree=item.is_free,
            pagesCount=item.pages_count,
            questionsCount=item.questions_count,
            difficulty=item.difficulty,
            downloadUrl=f"/api/worksheets/{item.id}/download"
        )
        for item in items
    ]

@router.get("/{worksheet_id}", response_model=WorksheetResponse)
def get_worksheet_detail(worksheet_id: str, db: Session = Depends(get_db)):
    """
    Returns specific worksheet information.
    """
    seed_worksheets(db)
    ws = db.query(Worksheet).filter(Worksheet.id == worksheet_id).first()
    if not ws:
        raise HTTPException(status_code=404, detail="Worksheet not found")
    return WorksheetResponse(
        id=ws.id,
        title=ws.title,
        grade=ws.grade,
        board=ws.board,
        subject=ws.subject,
        topic=ws.topic,
        description=ws.description,
        isFree=ws.is_free,
        pagesCount=ws.pages_count,
        questionsCount=ws.questions_count,
        difficulty=ws.difficulty,
        downloadUrl=f"/api/worksheets/{ws.id}/download"
    )
