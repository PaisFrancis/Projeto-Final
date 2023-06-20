import { Request, Response } from "express";
import { findById } from "../../services/auth";

export default async (request: Request, response: Response) => {
  const { id } = request.params as { id: string };

  const user = await findById(id);

  if (!user) {
    return response.status(404).json({
      code: 404,
      message: "User not found",
    });
  }

  return response.json(user);
};
