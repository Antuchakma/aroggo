import { Router } from "express";
import { authenticate, requireRole } from "../middleware/auth";

const router = Router();
router.use(authenticate, requireRole("PATIENT"));

router.get("/dashboard", (req, res) => {
  res.json({ message: "Patient dashboard - TODO" });
});

export default router;
