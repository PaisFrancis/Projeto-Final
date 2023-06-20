import { Request, Response } from "express";
import { createOrder } from "../../services/order";

export default async (request: Request, response: Response) => {
  const { tableNumber, items, status } = request.body;

  try {
    const newOrder = await createOrder(tableNumber, items, status);
    return response.json(newOrder);
  } catch (error) {
    console.error("Error creating order:", error);
    return response.status(500).json({
      message: "Internal Server Error",
    });
  }
};
