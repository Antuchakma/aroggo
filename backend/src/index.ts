import "dotenv/config";
import express from "express";
import cors from "cors";
import { createServer } from "http";
import { initSocket } from "./socket";

import authRoutes from "./routes/auth.routes";
import patientRoutes from "./routes/patient.routes";
import doctorRoutes from "./routes/doctor.routes";
import adminRoutes from "./routes/admin.routes";
import connectionRoutes from "./routes/connections.routes";
import appointmentRoutes from "./routes/appointments.routes";
import prescriptionRoutes from "./routes/prescriptions.routes";
import medicineRoutes from "./routes/medicines.routes";
import reportRoutes from "./routes/reports.routes";
import healthMetricRoutes from "./routes/health-metrics.routes";
import chatRoutes from "./routes/chat.routes";

const app = express();
const httpServer = createServer(app);

initSocket(httpServer);

app.use(cors({ origin: process.env.CLIENT_URL || "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.get("/health", (_req, res) => res.json({ status: "ok" }));

app.use("/api/auth", authRoutes);
app.use("/api/patient", patientRoutes);
app.use("/api/doctor", doctorRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/connections", connectionRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/prescriptions", prescriptionRoutes);
app.use("/api/medicines", medicineRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/health-metrics", healthMetricRoutes);
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`AROGGO backend running on http://localhost:${PORT}`);
});
