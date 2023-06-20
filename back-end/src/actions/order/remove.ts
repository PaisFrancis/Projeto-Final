import { Request, Response } from "express";
import { deleteOrder, getOrder } from "../../services/order";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await getOrder(id))) {
    return response.status(404).json({
      code: 404,
      message: "Appointment not found",
    });
  }

  const deletedOrder = await deleteOrder(id);
  return response.json(deletedOrder);
};
