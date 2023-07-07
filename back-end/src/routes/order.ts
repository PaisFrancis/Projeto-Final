import express from "express";
import { get, getAll, create, remove, update } from "../actions/order";
import { authorizeStaff, authorizeUser } from "../middleware/permissions";

const router = express.Router();

router.get("", authorizeStaff, getAll);
router.get("/:id", authorizeStaff, get);
router.post("", authorizeStaff, create);
router.delete("/:id", authorizeStaff, remove);
router.put("/:id", authorizeStaff, update);

export default router;
