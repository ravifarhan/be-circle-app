import { Request, Response } from "express";
import prisma from "../db";

export const follow = async (req: Request, res: Response) => {
  try {
    const { followerId, followingId } = req.body;
    const follow = await prisma.follow.create({
      data: {
        followerId,
        followingId,
      },
    });
    res.status(200).json(follow);
  } catch (err) {
    res.status(500).json(err);
  }
}

export const getFollowers = async (req: Request, res: Response) => {
  try {
    const { followingId } = req.params;
    const follow = await prisma.follow.findMany({
      where: {
        followingId: +followingId, //parseInt(followingId) or Number(followingId)
      }
    });
    res.status(200).json(follow);
  } catch (err) {
    res.status(500).json(err);
  }
}