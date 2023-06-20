import express, { Request, Response } from "express";
import authRoutes from "./auth";
import tableRoutes from "./table";
import itemRoutes from "./item";
import orderRoutes from "./order";
import reservationRoutes from "./reservation";
import { name, version } from "../../package.json";

const router = express.Router();

router.get("/", (req: Request, res: Response) =>
  res.json({
    name,
    version,
  })
);

router.use("/auth", authRoutes);
router.use("/reservation", reservationRoutes);
router.use("/table", tableRoutes);
router.use("/item", itemRoutes);
router.use("/order", orderRoutes);

export default router;
