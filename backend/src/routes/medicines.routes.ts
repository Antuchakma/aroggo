import { Router } from "express";
import { authenticate } from "../middleware/auth";
import { prisma } from "../lib/prisma";

const router = Router();
router.use(authenticate);

router.get("/", async (_req, res) => {
  const medicines = await prisma.medicine.findMany({ orderBy: { name: "asc" } });
  res.json({ medicines });
});

router.post("/", async (req, res) => {
  const { name, description } = req.body;
  const medicine = await prisma.medicine.create({ data: { name, description } });
  res.status(201).json({ medicine });
});

export default router;
