<div align="center">

<br />

```
 █████╗ ██████╗  ██████╗  ██████╗  ██████╗  ██████╗
██╔══██╗██╔══██╗██╔═══██╗██╔════╝ ██╔════╝ ██╔═══██╗
███████║██████╔╝██║   ██║██║  ███╗██║  ███╗██║   ██║
██╔══██║██╔══██╗██║   ██║██║   ██║██║   ██║██║   ██║
██║  ██║██║  ██║╚██████╔╝╚██████╔╝╚██████╔╝╚██████╔╝
╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝  ╚═════╝  ╚═════╝
```

**A web-based healthcare platform with ML-powered drug interaction detection**

[![Java](https://img.shields.io/badge/Java-21-ED8B00?style=flat-square&logo=openjdk&logoColor=white)](https://openjdk.org/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-6DB33F?style=flat-square&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/Python-3.11-3776AB?style=flat-square&logo=python&logoColor=white)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.11x-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=flat-square&logo=docker&logoColor=white)](https://docs.docker.com/compose/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](./LICENSE)

</div>

---

## What is AROGGO?

AROGGO connects patients, doctors, and admins through a single web platform. Doctors manage appointments, write prescriptions, and track patient health. Patients upload medical reports, view their history, and chat with a health assistant. Admins oversee the platform and approve new doctors.

The centrepiece feature is the **ML-powered drug safety engine** — before a prescription is saved, AROGGO checks every medicine against the patient's known allergies, diagnosed conditions, and existing medications, and surfaces risk warnings in real time directly in the prescription form.

---

## Features

### For Patients
- Dashboard with health summaries and activity feed
- Upload and retrieve medical reports (with automatic OCR text extraction)
- View prescription history and medicine details
- Manage a personal allergy and condition profile
- Health metric tracking with trend charts
- Chat-based health assistant with saved conversation history
- Plain-language safety summary for active prescriptions

### For Doctors
- Patient connection and management workflow
- Appointment creation and scheduling
- Prescription builder with live medicine search
- **Real-time drug interaction alerts** while writing prescriptions — flagged by the ML engine before saving
- Ability to acknowledge and override a warning with a documented reason
- Health metric recording during consultations

### For Admins
- System-wide dashboard and user counts
- Doctor approval and revocation workflow
- Medicine database management and sync triggers

### ML Drug Safety Engine
- **Drug–drug** interaction detection across all medicines in a prescription
- **Drug–condition** contraindication checks (matched against patient ICD-10 conditions)
- **Drug–allergy** checks (drug families, excipients, cross-reactive allergens)
- **Drug–current medication** cross-checking with the patient's active prescription history
- Risk scores: `LOW` · `MODERATE` · `HIGH` · `CONTRAINDICATED`
- Human-readable explanation per flagged pair
- All doctor overrides are audit-logged with reason and timestamp

---

## Architecture

```
┌─────────────────────────────────────────────────────┐
│              Browser (React 19 + TypeScript)         │
│         Vite · shadcn/ui · TanStack Query            │
└────────────────────────┬────────────────────────────┘
                         │  REST / WebSocket (STOMP)
                    Nginx Reverse Proxy
                         │
          ┌──────────────▼──────────────┐
          │      Spring Boot 3 (Java 21) │
          │  Spring MVC · Spring Security│
          │  Spring Data JPA · Flyway    │
          │  Spring WebSocket + STOMP    │
          │  Tess4J · Apache PDFBox      │
          └──────┬───────────────┬───────┘
                 │               │
         ┌───────▼──────┐  ┌────▼──────────────────┐
         │  PostgreSQL   │  │  ML Microservice       │
         │  + Redis      │  │  (FastAPI · Python)    │
         │               │  │  scikit-learn / XGBoost│
         │  Medicine DB  │  │  RDKit · DrugBank data │
         │  mirror       │  └────────────────────────┘
         └───────────────┘
                 │
         ┌───────▼───────┐
         │  AWS S3 /     │
         │  MinIO        │
         │  (file store) │
         └───────────────┘
```

The ML microservice runs as an isolated Docker container on the internal network and is never exposed publicly. Spring Boot calls it via internal REST at prescription-check time.

---

## Tech Stack

### Frontend

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript 5 |
| Build tool | Vite |
| Routing | React Router v7 |
| State | Zustand |
| Server state / caching | TanStack Query (React Query) |
| UI components | shadcn/ui + Tailwind CSS |
| Charts | Recharts |
| Forms + validation | React Hook Form + Zod |
| Real-time | SockJS + STOMP client |
| File upload | react-dropzone |
| HTTP client | Axios |

### Backend

| Layer | Technology |
|---|---|
| Framework | Spring Boot 3.x |
| Language | Java 21 |
| REST | Spring MVC |
| Security | Spring Security + JJWT |
| ORM | Spring Data JPA + Hibernate |
| DB migrations | Flyway |
| Real-time | Spring WebSocket + STOMP |
| File storage | AWS S3 / MinIO (via AWS SDK) |
| OCR | Tess4J (Tesseract wrapper) |
| PDF parsing | Apache PDFBox |
| Validation | Jakarta Bean Validation |
| API docs | SpringDoc OpenAPI 3 (Swagger UI) |
| Testing | JUnit 5 + Mockito + Testcontainers |
| Build | Maven |

### ML Microservice

| Layer | Technology |
|---|---|
| API framework | FastAPI |
| ML models | scikit-learn / XGBoost |
| Drug featurisation | RDKit (SMILES fingerprints) |
| Interaction data | DrugBank, TWOSIDES, SIDER, OpenFDA |
| Model serving | joblib / ONNX at startup |
| Container | Docker (isolated, internal network only) |

### Data

| Layer | Technology |
|---|---|
| Primary database | PostgreSQL 16 |
| Cache / sessions | Redis |
| Medicine reference | DrugBank (open) + RxNorm + local PostgreSQL mirror |
| Object storage | AWS S3 or MinIO |

---

## Getting Started

### Prerequisites

- Docker and Docker Compose
- Java 21 + Maven (for local backend development)
- Node.js 20+ (for local frontend development)
- Python 3.11+ (for local ML service development)

### Quick start with Docker Compose

```bash
git clone https://github.com/your-org/aroggo.git
cd aroggo
cp .env.example .env          # fill in your values
docker compose up --build
```

| Service | URL |
|---|---|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:8080 |
| Swagger UI | http://localhost:8080/swagger-ui.html |
| ML service | http://localhost:8000/docs (internal only) |

### Environment variables

Copy `.env.example` to `.env` and set the following:

```env
# Database
POSTGRES_DB=aroggo
POSTGRES_USER=aroggo
POSTGRES_PASSWORD=your_password

# JWT
JWT_SECRET=your_jwt_secret_min_32_chars
JWT_EXPIRY_MS=86400000

# AWS S3 / MinIO
S3_ENDPOINT=http://minio:9000
S3_BUCKET=aroggo-files
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret

# ML service
ML_SERVICE_URL=http://ml-service:8000

# DrugBank (optional — for seeding medicine DB)
DRUGBANK_API_KEY=your_key
```

### Running services individually

**Backend**
```bash
cd backend
mvn spring-boot:run
```

**Frontend**
```bash
cd frontend
npm install
npm run dev
```

**ML microservice**
```bash
cd ml-service
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

**Seed the medicine database**
```bash
# Trigger via the admin API after backend is running
curl -X GET http://localhost:8080/api/admin/medicines/sync \
  -H "Authorization: Bearer <admin_token>"
```

---

## API Overview

| Area | Base path |
|---|---|
| Auth | `/api/auth` |
| Patient | `/api/patient` |
| Allergies & conditions | `/api/patient/{id}/allergies`, `/api/patient/{id}/conditions` |
| Doctor | `/api/doctor` |
| Connections | `/api/connections` |
| Appointments | `/api/appointments` |
| Prescriptions | `/api/prescriptions` |
| Drug interaction check | `/api/prescriptions/check-interactions` |
| Medicines | `/api/medicines` |
| Medical reports | `/api/reports` |
| Health metrics | `/api/health-metrics` |
| Chat | `/api/chat` |
| Admin | `/api/admin` |

Full interactive docs are available at `/swagger-ui.html` when the backend is running.

---

## Drug Interaction Check — How it works

When a doctor selects medicines in the prescription form, the frontend calls `POST /api/prescriptions/check-interactions` with:

```json
{
  "patientId": "uuid",
  "medicines": ["metformin", "ibuprofen", "lisinopril"]
}
```

The Spring Boot backend fetches the patient's allergy profile, active conditions, and current prescription history, then forwards everything to the ML microservice. The response comes back as:

```json
{
  "interactions": [
    {
      "drugA": "ibuprofen",
      "drugB": "lisinopril",
      "severity": "MODERATE",
      "explanation": "NSAIDs may reduce the antihypertensive effect of ACE inhibitors and increase the risk of acute kidney injury."
    }
  ],
  "allergyFlags": [],
  "conditionFlags": [
    {
      "drug": "ibuprofen",
      "condition": "Hypertension",
      "severity": "MODERATE",
      "explanation": "NSAID use is associated with elevated blood pressure in hypertensive patients."
    }
  ]
}
```

The prescription form shows these inline before the doctor saves. If they choose to override, a reason is required and the override is stored in `PrescriptionInteractionAudit`.

---

## Project Structure

```
aroggo/
├── frontend/                  # React 19 + TypeScript
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── store/             # Zustand stores
│   │   └── lib/               # API clients, utils
│   └── vite.config.ts
│
├── backend/                   # Spring Boot 3 (Java 21)
│   └── src/main/java/com/aroggo/
│       ├── auth/
│       ├── patient/
│       ├── doctor/
│       ├── prescription/
│       ├── medicine/
│       ├── report/
│       ├── chat/
│       ├── healthmetric/
│       ├── notification/
│       └── admin/
│
├── ml-service/                # FastAPI (Python)
│   ├── models/                # Trained model files
│   ├── data/                  # Drug interaction datasets
│   ├── routers/
│   │   └── interactions.py
│   ├── services/
│   │   ├── drug_checker.py
│   │   └── patient_profile.py
│   └── main.py
│
├── docker-compose.yml
├── .env.example
└── README.md
```

---

## Data Models

<details>
<summary>Click to expand key models</summary>

```
User · Doctor · DoctorSpecialty · DoctorHospitalHistory
DoctorDegree · DoctorAchievement

Patient · PatientAllergy · PatientCondition · PatientMedicalHistory

AppointmentRequest · DoctorPatient · Appointment

Medicine · DrugInteraction · DrugContraindication

Prescription · PrescriptionMedicine · PrescriptionInteractionAudit

MedicalReport · ChatMessage · HealthMetric · Notification
```

`PatientAllergy` — allergen name, drug family, severity, confirmed flag  
`PatientCondition` — ICD-10 code, diagnosis date, active flag  
`DrugInteraction` — drug A, drug B, severity, description, source dataset  
`DrugContraindication` — medicine, ICD-10 code, severity, source  
`PrescriptionInteractionAudit` — flagged interaction, doctor override reason, timestamp

</details>

---

## Roadmap

- [ ] Patient-facing prescription safety summary (plain language)
- [ ] FHIR R4 export for medical records
- [ ] Graph neural network upgrade for drug–drug interaction model
- [ ] Mobile PWA support
- [ ] Multi-language support (i18n)
- [ ] Admin analytics dashboard
- [ ] Telemedicine video consultation integration

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: describe your change"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

Please follow the existing code style. Backend code is checked with Checkstyle; frontend with ESLint + Prettier.

---

## License

MIT — see [LICENSE](./LICENSE) for details.

---

<div align="center">
  <sub>Built with care for safer prescriptions.</sub>
</div>
