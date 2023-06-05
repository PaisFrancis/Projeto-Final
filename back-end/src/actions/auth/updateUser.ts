import { Request, Response } from "express";
import { findById, updateUser } from "../../services/auth";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await findById(id))) {
    return response.status(404).json({
      code: 404,
      message: "User not found",
    });
  }

  const updatedUser = await updateUser(id, request.body);

  return response.json(updatedUser);
};
