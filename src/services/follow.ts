import db from "../db";

export const follow = async (followerId: number, followingId: number) => {
  const existingFollow = await db.follow.findFirst({
    where: {
      followerId,
      followingId,
    },
  });

  if (existingFollow) {
    await db.follow.deleteMany({
      where: {
        followerId,
        followingId,
      },
    });
    return "Unfollowing success";
  }

  await db.follow.create({
    data: {
      followerId,
      followingId,
    },
  });

  return "Following success";
};
