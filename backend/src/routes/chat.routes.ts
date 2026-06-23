import { Router } from "express";
import { authenticate } from "../middleware/auth";
import { prisma } from "../lib/prisma";
import { AuthRequest } from "../middleware/auth";

const router = Router();
router.use(authenticate);

router.get("/history", async (req: AuthRequest, res) => {
  const messages = await prisma.chatMessage.findMany({
    where: { userId: req.user!.id },
    orderBy: { createdAt: "asc" },
  });
  res.json({ messages });
});

router.post("/message", (req, res) => {
  res.json({ message: "Chat assistant - AI integration TODO" });
});

export default router;
