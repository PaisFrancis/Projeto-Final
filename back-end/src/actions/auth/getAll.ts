import { Request, Response } from "express";
import { getAll } from "../../services/auth";

export default async (_: Request, response: Response) => {
  response.json(await getAll());
};
