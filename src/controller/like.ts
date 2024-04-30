import { Request, Response } from "express";
import * as likeService from "../services/like";

export const getLikes = async (req: Request, res: Response) => {
  try {
    const { threadId } = req.params;
    const likes = await likeService.getLikes(+threadId);

    res.json({
      status: true,
      message: "success",
      data: {
        user: likes,
      },
    });
  } catch (error) {
    const err = error as unknown as Error;
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};


export const getCurrentUserLike = async (req: Request, res: Response) => {
  try {
    const { threadId } = req.params;
    const userId = res.locals.user;
    const like = await likeService.getCurrentUserLike(+threadId, +userId);

    res.json({
      status: true,
      message: "success",
      data: {
        like,
      },
    })
  } catch (error) {
    const err = error as unknown as Error;
    res.status(500).json({
      status: false,
      message: err.message,
    })
  }
}

export const createLike = async (req: Request, res: Response) => {
  try {
    const { threadId } = req.body;
    const userId  = res.locals.user;
    // await likeService.createLike({
    //   threadId,
    //   userId,
    // });

    const message = await likeService.createLike({
      threadId,
      userId,
    });

    res.json({
      status: true,
      message,
    });
  } catch (error) {
    const err = error as unknown as Error;
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};
