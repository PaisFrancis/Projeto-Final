import express from "express";
import { get, getAll, create, remove, update } from "../actions/item";
import { authorizeAdmin } from "../middleware/permissions";

const router = express.Router();

router.get("", getAll);
router.get("/:id", get);
router.post("", authorizeAdmin, create);
router.delete("/:id", authorizeAdmin, remove);
router.put("/:id", authorizeAdmin, update);

export default router;
