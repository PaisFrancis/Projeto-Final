import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { ExtendedPayload } from "../models/token";
import { findById } from "../services/auth";

const publicEndpoints = ["/auth/login", "/auth/register", "/item/"];

export function verifyToken(
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (publicEndpoints.includes(request.path)) {
    return next();
  }

  const authHeader = request.headers.authorization;

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return response.sendStatus(401).json({
      code: 401,
      message: "Token not found",
    });
  }

  verify(token, process.env.JWT_SECRET!, async (error, payload) => {
    if (error) {
      return response.status(403).json({
        code: 403,
        message: error.message,
      });
    }

    const { user_id: id } = payload as ExtendedPayload;

    const user = await findById(id);

    if (!user) {
      return response.status(404).json({
        code: 404,
        message: "User not found",
      });
    }

    request.user = user;

    next();
  });
}
