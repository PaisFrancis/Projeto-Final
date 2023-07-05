import { Router } from "express";
import { login, getAll, register, findById, profile } from "../actions/auth";
import { authorizeAdmin } from "../middleware/permissions";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.get("/profile", profile);
router.get("/:id", findById);
router.get("", authorizeAdmin, getAll);

export default router;
