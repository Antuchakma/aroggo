# AROGGO — Project Updates

> Auto-updated after each work session.

---

## Work Done

| # | Area | Task | Status |
|---|------|------|--------|
| 1 | Backend | Express 5 + TypeScript project setup | ✅ Done |
| 2 | Backend | `tsconfig.json` and `nodemon` dev tooling | ✅ Done |
| 3 | Backend | Prisma schema — all 17 models (User, Doctor, Patient, Appointment, Prescription, Medicine, MedicalReport, HealthMetric, ChatMessage, Notification, and junction tables) | ✅ Done |
| 4 | Backend | Prisma client singleton (`src/lib/prisma.ts`) | ✅ Done |
| 5 | Backend | JWT auth middleware with role guards (`authenticate`, `requireRole`) | ✅ Done |
| 6 | Backend | Auth controller — register, login, me endpoints | ✅ Done |
| 7 | Backend | Route stubs — all 11 API areas wired to Express app | ✅ Done |
| 8 | Backend | Admin dashboard endpoint (counts) + doctor approve/revoke | ✅ Done |
| 9 | Backend | Medicine catalog endpoints (list + create) | ✅ Done |
| 10 | Backend | Chat history GET endpoint | ✅ Done |
| 11 | Backend | Multer file upload setup for reports (pdf/jpg/png) | ✅ Done |
| 12 | Backend | Socket.IO server initialization with room support | ✅ Done |
| 13 | Backend | `.env.example` and `uploads/` directory | ✅ Done |
| 14 | Mobile | Expo + React Native + TypeScript project scaffold | ✅ Done |
| 15 | Mobile | Expo Router file-based routing configured | ✅ Done |
| 16 | Mobile | Root layout with auth redirect guard (role-aware routing) | ✅ Done |
| 17 | Mobile | Auth screens — Login + Register (with role picker) | ✅ Done |
| 18 | Mobile | Patient tab group — Dashboard, Appointments, Prescriptions, Reports, Chat | ✅ Done |
| 19 | Mobile | Doctor tab group — Dashboard, Patients, Appointments, Prescriptions | ✅ Done |
| 20 | Mobile | Admin tab group — Dashboard, Approvals | ✅ Done |
| 21 | Mobile | `useAuth` hook — session persistence via AsyncStorage | ✅ Done |
| 22 | Mobile | `api.ts` — typed fetch wrapper with auto JWT header | ✅ Done |
| 23 | Mobile | Admin dashboard with live stats from `/api/admin/dashboard` | ✅ Done |
| 24 | Mobile | `.env.example` for `EXPO_PUBLIC_API_URL` | ✅ Done |
| 25 | Root | Monorepo `package.json` with scripts for backend + mobile | ✅ Done |
| 26 | Root | `README.md` with setup instructions | ✅ Done |

---

## Work Remaining

| # | Area | Task | Priority |
|---|------|------|----------|
| 1 | Backend | Patient routes — dashboard stats, profile | High |
| 2 | Backend | Doctor routes — dashboard stats, profile, patient list | High |
| 3 | Backend | Connections routes — send request, accept/reject, list | High |
| 4 | Backend | Appointments routes — CRUD, status updates | High |
| 5 | Backend | Prescriptions routes — create with medicines, list by patient | High |
| 6 | Backend | Reports routes — OCR with Tesseract.js + PDF parsing with pdfjs | High |
| 7 | Backend | Health metrics routes — record and list by patient | High |
| 8 | Backend | Chat routes — AI health assistant integration | Medium |
| 9 | Backend | Notification system — create and deliver notifications | Medium |
| 10 | Backend | Socket.IO — real-time notification delivery | Medium |
| 11 | Mobile | Patient dashboard — load real data (appointments, prescriptions, reports) | High |
| 12 | Mobile | Appointments screen — list + status display | High |
| 13 | Mobile | Prescriptions screen — list medicines and dosage | High |
| 14 | Mobile | Reports screen — upload file, display OCR results | High |
| 15 | Mobile | Health metrics screen — input form + trend charts | High |
| 16 | Mobile | Chat screen — message UI + AI assistant | Medium |
| 17 | Mobile | Doctor patients screen — accepted patient list + detail view | High |
| 18 | Mobile | Doctor appointments screen — manage and create appointments | High |
| 19 | Mobile | Doctor prescriptions screen — create prescription with medicines | High |
| 20 | Mobile | Admin approvals screen — list pending doctors + approve/revoke | High |
| 21 | Mobile | Connection request flow — patient sends request, doctor accepts | High |
| 22 | Mobile | Personal medical history screen | Medium |
| 23 | Mobile | Notifications screen | Medium |
