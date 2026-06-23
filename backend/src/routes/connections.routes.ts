import { Router } from "express";
import { authenticate } from "../middleware/auth";

const router = Router();
router.use(authenticate);

router.post("/request", (req, res) => { res.json({ message: "Connection request - TODO" }); });
router.get("/", (req, res) => { res.json({ message: "List connections - TODO" }); });
router.patch("/:id", (req, res) => { res.json({ message: "Update connection - TODO" }); });

export default router;
