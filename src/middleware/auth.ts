import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { authMiddlewareData } from "../type/app";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        status: false,
        message: "Unauthorized",
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY!);

    if (!decoded) {
      return res.status(401).json({
        status: false,
        message: "Unauthorized",
      });
    }

    res.locals.user = (decoded as authMiddlewareData).id;

    return next();
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "Unauthorized",
    });
  }
};

export default auth;
