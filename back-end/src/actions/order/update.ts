import { Request, Response } from "express";
import { updateOrder } from "../../services/order";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  // Retrieve the existing order and update it
  const updatedOrder = await updateOrder(id, request.body);

  // Send the updated order as a response
  return response.json(updatedOrder);
};
