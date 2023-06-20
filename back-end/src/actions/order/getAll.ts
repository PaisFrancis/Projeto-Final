import { Request, Response } from "express";
import { getAllOrders } from "../../services/order";

export default async (_: Request, res: Response) => {
  res.json(await getAllOrders());
};
