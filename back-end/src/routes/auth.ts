import { Router } from "express";
import {
  login,
  getAll,
  register,
  updateUser,
  findById,
  profile,
} from "../actions/auth";
import { authorizeAdmin } from "../middleware/permissions";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/profile", profile);
router.get("/:id", findById);
router.get("", authorizeAdmin, getAll);
router.put("/user/:id/role", authorizeAdmin, updateUser);

export default router;
