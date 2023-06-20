import express from "express";
import { getAll, get, remove, update, create } from "../actions/reservation";
import { authorizeStaff, authorizeUser } from "../middleware/permissions";

const router = express.Router();

router.get("", authorizeStaff, getAll);
router.get("/:id", authorizeUser, get);
router.post("", authorizeUser, create);
router.delete("/:id", authorizeUser, remove);
router.put("/:id", authorizeUser, update);

export default router;
