import { Request, Response } from "express";
import * as userService from "../services/user";
import { request } from "http";

export const register = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await userService.register(body);

    res.json({
      status: true,
      message: "success",
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: err,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const token = await userService.login(username, password);

    res.json({
      status: true,
      message: "success",
      data: token,
    });
  } catch (error) {
    const err = error as unknown as Error;
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};



export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUsers();
    res.json({
      status: true,
      message: "success",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: err,
    });
  }
};
