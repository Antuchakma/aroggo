# AROGGO — Healthcare Platform

A mobile healthcare platform connecting patients, doctors, and admins.

## Structure

```
system/
├── backend/    Node.js + Express 5 + Prisma + PostgreSQL + Socket.IO
└── mobile/     React Native + Expo + Expo Router + TypeScript
```

## Quick Start

### 1. Backend

```bash
cp backend/.env.example backend/.env
# Edit backend/.env with your DATABASE_URL and JWT_SECRET

npm run prisma:migrate   # run DB migrations
npm run backend          # start dev server on :3000
```

### 2. Mobile

```bash
cp mobile/.env.example mobile/.env.local
# Edit EXPO_PUBLIC_API_URL if backend runs on a different host

npm run mobile           # start Expo (scan QR with Expo Go)
npm run mobile:android   # open on Android emulator
```

## API

Backend health check: `GET http://localhost:3000/health`

All routes are under `/api/`:
- `/api/auth` — register, login, me
- `/api/patient` — patient dashboard
- `/api/doctor` — doctor dashboard
- `/api/admin` — admin dashboard + doctor approvals
- `/api/connections` — patient-doctor connection requests
- `/api/appointments` — appointment CRUD
- `/api/prescriptions` — prescription management
- `/api/medicines` — medicine catalog
- `/api/reports` — file upload + OCR
- `/api/health-metrics` — health data
- `/api/chat` — AI health assistant
