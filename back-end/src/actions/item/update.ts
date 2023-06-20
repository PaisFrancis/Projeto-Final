import { Request, Response } from "express";
import { updateMenuItem, getMenuItem } from "../../services/item";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await getMenuItem(id))) {
    return response.status(404).json({
      code: 404,
      message: "Item not found",
    });
  }

  const updatedMenuItem = await updateMenuItem(id, request.body);

  return response.json(updatedMenuItem);
};
