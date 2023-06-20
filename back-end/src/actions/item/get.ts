import { Request, Response } from "express";
import { getMenuItem } from "../../services/item";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const MenuItem = await getMenuItem(id);

  if (!MenuItem) {
    return response.status(404).json({
      code: 404,
      message: "Item not found",
    });
  }

  return response.json(MenuItem);
};
