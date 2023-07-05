import { Request, Response } from "express";
import { updateReservation } from "../../services/reservation";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  // Retrieve the existing reservation and update it
  const updatedReservation = await updateReservation(id, request.body);

  // Send the reservation order as a response
  return response.json(updatedReservation);
};
