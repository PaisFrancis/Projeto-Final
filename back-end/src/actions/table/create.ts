import { Request, Response } from "express";
import { createTable } from "../../services/table";

export default async (request: Request, response: Response) => {
  const { number, capacity, available } = request.body;

  const newTable = await createTable(number, capacity, available);

  return response.json(newTable);
};
