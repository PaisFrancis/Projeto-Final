import { Request, Response } from "express";
import { createReservation } from "../../services/reservation";

export default async (request: Request, response: Response) => {
  const { tableId, reservationTime } = request.body;
  const userId = request.user.id;

  try {
    const newReservation = await createReservation(
      userId,
      tableId,
      reservationTime
    );
    return response.json(newReservation);
  } catch (error) {
    console.error("Error creating reservation:", error);
    return response.status(500).json({
      message: "Internal Server Error",
    });
  }
};
