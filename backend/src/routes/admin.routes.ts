import { Router } from "express";
import { authenticate, requireRole } from "../middleware/auth";
import { prisma } from "../lib/prisma";

const router = Router();
router.use(authenticate, requireRole("ADMIN"));

router.get("/dashboard", async (_req, res) => {
  const [doctors, patients, pending] = await Promise.all([
    prisma.doctor.count(),
    prisma.patient.count(),
    prisma.user.count({ where: { role: "DOCTOR", isApproved: false } }),
  ]);
  res.json({ doctors, patients, pendingApprovals: pending });
});

router.post("/doctors/:id/approve", async (req, res) => {
  await prisma.user.update({ where: { id: req.params.id }, data: { isApproved: true } });
  res.json({ message: "Doctor approved" });
});

router.post("/doctors/:id/revoke", async (req, res) => {
  await prisma.user.update({ where: { id: req.params.id }, data: { isApproved: false } });
  res.json({ message: "Doctor approval revoked" });
});

export default router;
