import { Request, Response } from "express";
import { getAllTables } from "../../services/table";

export default async (_: Request, response: Response) => {
  response.json(await getAllTables());
};
