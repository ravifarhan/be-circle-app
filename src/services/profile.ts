import db from "../db";
import { IProfile, IUserProfile } from "../type/app";

// export const updateProfile = async (userId: number, payload: IProfile) => {
//   return await db.profile.update({
//     where: {
//       userId,
//     },
//     data: {
//       ...payload,
//     },
//   });
// };

export const updateUserProfile = async (
  userId: number,
  payload: IUserProfile
) => {
  
  if (payload.fullname || payload.username) {
    if (payload.username) {
      const isExist = await db.user.findFirst({
        where: {
          username: payload.username,
        },
      });

      if (isExist) {
        throw new Error("Username already exists");
      }
    }
    await db.user.update({
      where: {
        id: userId,
      },
      data: {
        fullname: payload.fullname,
        username: payload.username,
      },
    });
  }
  if (payload.cover || payload.avatar || payload.bio) {
    await db.profile.update({
      where: {
        userId,
      },
      data: {
        bio: payload.bio,
        cover: payload.cover,
        avatar: payload.avatar,
      },
    });
  }
};

export const getProfile = async (userId: number) => {
  return await db.profile.findFirst({
    where: {
      userId,
    },
    include: {
      user: {
        select: {
          follower: true,
          following: true,
          username: true,
          fullname: true,
          id: true,
          _count: {
            select: {
              follower: true,
              following: true,
            },
          },
        },
      },
    },
  });
};
