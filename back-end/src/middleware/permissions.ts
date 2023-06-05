/* import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { ExtendedPayload } from "../models/token";
import { findById } from "../services/auth";
import { UserRole } from "@prisma/client"; // Import the UserRole enum from your Prisma schema

export function checkUserRole(allowedRoles: UserRole[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "unauthorized" });
    }

    const token = authHeader.split(" ")[1];

    verify(token, process.env.JWT_SECRET!, async (error, payload) => {
      if (error) {
        return res.status(403).json({ message: error.message });
      }

      const { user_id: id } = payload as ExtendedPayload;

      const user = await findById(id);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const { role } = user;

      if (!allowedRoles.includes(role)) {
        return res.status(404).json({ message: "Forbidden" });
      }

      req.user = user;

      next();
    });
  };
}
 */
