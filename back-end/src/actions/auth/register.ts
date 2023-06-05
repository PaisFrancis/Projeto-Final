import { Request, Response } from "express";
import { register } from "../../services/auth";

export default async (request: Request, response: Response) => {
  try {
    const { email, password, role, firstName, lastName } = request.body;

    /* console.log("Request body:", request.body); */

    const token = await register(email, password, role, firstName, lastName);

    /* console.log("Token:", token); */

    return response.json({ token });
  } catch (e: any) {
    return response.status(400).json({
      code: 400,
      error: "Bad Request",
      message: e.message,
    });
  }
};
