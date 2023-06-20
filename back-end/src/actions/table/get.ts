import { Request, Response } from "express";
import { getTable } from "../../services/table";

export default async (request: Request, response: Response) => {
  const { number } = request.params;

  if (!number || typeof number !== "string") {
    return response.status(400).json({
      code: 400,
      message: "Invalid or missing table number",
    });
  }

  const tableNumber = parseInt(number, 10);

  const table = await getTable(tableNumber);

  if (!table) {
    return response.status(404).json({
      code: 404,
      message: "Table not found",
    });
  }

  return response.json(table);
};
