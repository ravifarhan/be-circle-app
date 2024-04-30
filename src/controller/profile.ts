import { Request, Response } from "express";
import * as profileService from "../services/profile";

export const updateUserProfile = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user;
    const { body } = req;

    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    if (files && Object.keys(files).length > 0) {
      if(files.cover) body.cover = files.cover[0].filename;
      if(files.avatar) body.avatar = files.avatar[0].filename;
    }

    console.log(body);
    

    // await profileService.updateUserProfile(userId, body);

    // res.json({
    //   status: true,
    //   message: "success updated profile",
    // })



    // if (!req.files) {
    //   await profileService.updateUserProfile(userId, body);
    //   res.json({
    //     status: true,
    //     message: "success updated profile",
    //   });
    //   return;
    // }


    // if (files.cover && files.cover.length > 0) {
    //   body.cover = files.cover[0].filename;
    // }

    // if (files.avatar && files.avatar.length > 0) {
    //   body.avatar = files.avatar[0].filename;
    // }
    // const avatar = files.avatar[0].filename;
    // const cover = files.cover[0].filename;

    // if (avatar) {
    //   body.avatar = avatar;
    // }
    // if (cover) {
    //   body.cover = cover;
    // }

    await profileService.updateUserProfile(userId, body);

    res.json({
      status: true,
      message: "success",
    });
  } catch (error) {
    const err = error as unknown as Error;
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

export const getProfile = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user;
    const profile = await profileService.getProfile(userId);
    res.json({
      status: true,
      message: "success",
      data: profile,
    });
  } catch (error) {
    const err = error as unknown as Error;
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};
