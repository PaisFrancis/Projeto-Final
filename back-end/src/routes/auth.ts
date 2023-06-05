import { Router } from "express";
import { login, profile, register, updateUser } from "../actions/auth";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.get("/profile", profile);
router.put("/user/:id/role", updateUser);

export default router;
