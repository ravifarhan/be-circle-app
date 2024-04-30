import { Request, Response } from "express";
import * as searchService from "../services/search";

export const search = async (req: Request, res: Response) => {
  try {
    const { query } = req.query;
    const userId = res.locals.user;
    const result = await searchService.search(query as string, userId);
    res.json({
      status: true,
      message: "success",
      data: result,
    });
  } catch (error) {
    const err = error as unknown as Error;
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};
