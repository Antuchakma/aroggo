import { Router } from "express";
import { authenticate } from "../middleware/auth";

const router = Router();
router.use(authenticate);

router.post("/", (req, res) => { res.json({ message: "Create appointment - TODO" }); });
router.get("/", (req, res) => { res.json({ message: "List appointments - TODO" }); });
router.patch("/:id/status", (req, res) => { res.json({ message: "Update status - TODO" }); });

export default router;
