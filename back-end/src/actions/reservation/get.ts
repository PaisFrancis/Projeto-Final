import { Request, Response } from "express";
import { getReservation } from "../../services/reservation";

export default async (request: Request, response: Response) => {
  const { id } = request.params as { id: string };

  const reservation = await getReservation(id);

  if (!reservation) {
    return response.status(404).json({
      code: 404,
      message: "Reservation not found",
    });
  }

  return response.json(reservation);
};
