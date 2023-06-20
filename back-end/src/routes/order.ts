import express from "express";
import { get, getAll, create, remove, update } from "../actions/order";
import { authorizeStaff, authorizeUser } from "../middleware/permissions";

const router = express.Router();

router.get("", authorizeStaff, getAll);
router.get("/:id", authorizeUser, get);
router.post("", authorizeUser, create);
router.delete("/:id", authorizeUser, remove);
router.put("/:id", authorizeUser, update);

export default router;
