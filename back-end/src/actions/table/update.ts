import { Request, Response } from "express";
import { updateTable, getTable } from "../../services/table";

export default async (request: Request, response: Response) => {
  const { number } = request.params;
  const { capacity } = request.body;

  const tableNumber = parseInt(number, 10);

  // Retrieve the existing reservation and update it
  const updatedTable = await updateTable(tableNumber, capacity);

  // Send the reservation order as a response
  return response.json(updatedTable);
};
