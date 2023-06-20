import { Request, Response } from "express";
import { getMenuItem, deleteMenuItem } from "../../services/item";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await getMenuItem(id))) {
    return response.status(404).json({
      code: 404,
      message: "Doctor not found",
    });
  }

  const deletedMenuItem = await deleteMenuItem(id);
  return response.json(deletedMenuItem);
};
