import { NextFunction, Request, Response } from "express";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.headers);
  if (req.headers?.authorization?.startsWith("Bearer")) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};
