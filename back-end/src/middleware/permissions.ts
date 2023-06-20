import { NextFunction, Request, Response } from "express";

export const authorizeAdmin = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const userRole = request.user.role;
  if (userRole === "ADMIN") {
    next();
  } else {
    response.status(403).json({ error: "Unauthorized Access" });
  }
};

export const authorizeStaff = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const userRole = request.user.role;
  if (userRole === "STAFF" || userRole === "ADMIN") {
    next();
  } else {
    response.status(403).json({ error: "Unauthorized Access" });
  }
};

export const authorizeUser = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const userRole = request.user.role;
  if (userRole === "USER" || "ADMIN" || "STAFF") {
    next();
  } else {
    response.status(403).json({ error: "Unauthorized Access" });
  }
};
