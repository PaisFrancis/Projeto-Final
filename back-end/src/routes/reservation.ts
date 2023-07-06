import express from "express";
import { getAll, get, remove, update, create } from "../actions/reservation";
import { authorizeStaff, authorizeUser } from "../middleware/permissions";
import { getByUser } from "../actions/reservation/getByUser";

const router = express.Router();

router.get("", getAll);
router.get("/:id", authorizeUser, get);
router.get("/user/:userId", authorizeUser, getByUser);
router.post("", authorizeUser, create);
router.delete("/:id", authorizeUser, remove);
router.put("/:id", authorizeUser, update);

export default router;
