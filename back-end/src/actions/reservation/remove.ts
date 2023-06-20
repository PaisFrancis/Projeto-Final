import { Request, Response } from "express";
import { deleteReservation, getReservation } from "../../services/reservation";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await getReservation(id))) {
    return response.status(404).json({
      code: 404,
      message: "Order not found",
    });
  }

  const deletedOrder = await deleteReservation(id);
  return response.json(deletedOrder);
};
