import { Router } from "express";
import { authenticate } from "../middleware/auth";

const router = Router();
router.use(authenticate);

router.post("/", (req, res) => { res.json({ message: "Create prescription - TODO" }); });
router.get("/:patientId", (req, res) => { res.json({ message: "Get prescriptions - TODO" }); });

export default router;
