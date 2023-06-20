import { Request, Response } from "express";
import { getTable, deleteTable } from "../../services/table";

export default async (request: Request, response: Response) => {
  const { number } = request.params;

  const tableNumber = parseInt(number, 10);

  /* if (!(await getTable(tableNumber))) {
    return response.status(404).json({
      code: 404,
      message: "Table not found",
    });
  } */

  const deletedTable = await deleteTable(tableNumber);
  return response.json(deletedTable);
};
