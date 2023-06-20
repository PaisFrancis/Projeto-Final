import { Request, Response } from "express";
import { getOrder } from "../../services/order";

export default async (request: Request, response: Response) => {
  const { id } = request.params as { id: string };

  const order = await getOrder(id);

  if (!order) {
    return response.status(404).json({
      code: 404,
      message: "Order not found",
    });
  }

  return response.json(order);
};
