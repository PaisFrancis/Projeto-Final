import { Request, Response } from "express";
import { getAllMenuItems } from "../../services/item";

export default async (_: Request, response: Response) => {
  response.json(await getAllMenuItems());
};
