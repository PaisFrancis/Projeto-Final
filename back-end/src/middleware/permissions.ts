import { NextFunction, Request, Response } from "express";

// I decided to attribute different levels of access to different userRoles. Each app has a hidden input for their respective role. Only one admin can be created so that if this hidden input is manipulated it still can't access sensible information.

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
