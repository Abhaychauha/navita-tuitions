# Navita Tuitions — Modern EdTech Platform & Backend

A premier, interactive education website for **Navita Tuitions** in Padmanabhanagar, Bengaluru, featuring an interactive worksheet library with preview/free-sample support, user authentication, fee payments, and a modular Python FastAPI backend with SQLite persistence.

---

## Quick Start

### 1. Backend (Python FastAPI)

Navigate to the ackend directory, install requirements, and run the Uvicorn ASGI server:

`ash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
`

- **API Documentation (Swagger UI)**: http://127.0.0.1:8000/docs
- **Alternative Docs (ReDoc)**: http://127.0.0.1:8000/redoc
- **Health Check**: http://127.0.0.1:8000/health

### 2. Frontend (React + TypeScript + Tailwind)

In the root directory:

`ash
npm install
npm run dev
`

- **Frontend URL**: http://localhost:5173 or http://localhost:3000
- **Production Build**: 
pm run build
- **Serve Production Build**: python serve.py (serves dist/ on http://localhost:3000)

---

## Architecture Overview

`
navita-tuitions/
├── backend/
│   ├── app/
│   │   ├── api/          # REST Endpoints: enquiries, auth, worksheets, payments
│   │   ├── auth/         # Direct bcrypt hashing & JWT security tokens
│   │   ├── config.py     # Environment settings & CORS config
│   │   ├── database/     # SQLAlchemy SQLite session & base
│   │   ├── models/       # Database models (Enquiry, User, Payment, Worksheet)
│   │   ├── schemas/      # Pydantic validation schemas
│   │   └── main.py       # FastAPI application & startup seed
│   ├── .env.example      # Environment template
│   ├── requirements.txt  # Python package dependencies
│   └── navita.db         # SQLite database file
├── src/
│   ├── components/       # Header, Footer, Hero, Forms, Cards, Worksheets
│   ├── data/             # Worksheets, Courses, Reviews, FAQs
│   ├── pages/            # 7 Core pages + Auth & Account
│   ├── services/         # leadService, authService, paymentService, worksheetService
│   └── types/            # TypeScript data interfaces
├── package.json
└── serve.py
`
