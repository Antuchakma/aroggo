import { Router } from "express";
import multer from "multer";
import path from "path";
import { authenticate } from "../middleware/auth";

const storage = multer.diskStorage({
  destination: "uploads/reports",
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  fileFilter: (_req, file, cb) => {
    const allowed = [".pdf", ".jpg", ".jpeg", ".png"];
    cb(null, allowed.includes(path.extname(file.originalname).toLowerCase()));
  },
});

const router = Router();
router.use(authenticate);

router.post("/upload", upload.single("file"), (req, res) => {
  res.json({ message: "Report uploaded - OCR TODO", file: req.file });
});

router.get("/:patientId", (req, res) => {
  res.json({ message: "Get reports - TODO" });
});

export default router;
