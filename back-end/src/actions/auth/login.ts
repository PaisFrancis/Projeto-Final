import { Request, Response } from "express";
import { attemptLogin } from "../../services/auth";

export default async (request: Request, response: Response) => {
  try {
    const { email, password } = request.body;

    const token = await attemptLogin(email, password);

    return response.json({ token });
  } catch (e: any) {
    return response.status(401).json({
      code: 401,
      error: "Unauthorized",
      message: e.message,
    });
  }
};
