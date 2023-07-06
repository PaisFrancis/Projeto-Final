import { getReservationsByUserId } from "../../services/reservation";
import { Request, Response } from "express";

export async function getByUser(request: Request, response: Response) {
  try {
    const userId = request.params.userId;
    const reservations = await getReservationsByUserId(userId);
    response.json(reservations);
  } catch (error: any) {
    response.status(400).json({ message: error.message });
  }
}
