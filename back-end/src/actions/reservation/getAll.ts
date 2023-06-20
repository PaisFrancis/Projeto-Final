import { Request, Response } from "express";
import { getAllReservations } from "../../services/reservation";

export default async (_: Request, response: Response) => {
  response.json(await getAllReservations());
};
