import { Request, Response } from "express";
import { createMenuItem } from "../../services/item";

export default async (request: Request, response: Response) => {
  const { name, price, description, observations } = request.body;

  const newItem = await createMenuItem(name, price, description, observations);

  return response.json(newItem);
};
