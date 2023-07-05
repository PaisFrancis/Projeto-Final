import { Request, Response } from "express";
import { createTable } from "../../services/table";

export default async (request: Request, response: Response) => {
  const { number, capacity } = request.body;

  const newTable = await createTable(capacity, number);

  return response.json(newTable);
};
