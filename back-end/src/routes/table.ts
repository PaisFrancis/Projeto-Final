import express from "express";
import { get, getAll, create, remove, update } from "../actions/table";
import {
  authorizeAdmin,
  authorizeStaff,
  authorizeUser,
} from "../middleware/permissions";

const router = express.Router();

router.get("", authorizeUser, getAll);
router.get("/:number", authorizeUser, get);
router.post("", authorizeAdmin, create);
router.delete("/:number", authorizeAdmin, remove);
router.put("/:number", authorizeStaff, update);

export default router;
