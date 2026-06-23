import { Router } from "express";
import { authenticate, requireRole } from "../middleware/auth";

const router = Router();
router.use(authenticate, requireRole("DOCTOR"));

router.get("/dashboard", (req, res) => {
  res.json({ message: "Doctor dashboard - TODO" });
});

export default router;
