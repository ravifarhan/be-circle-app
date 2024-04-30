import db from "../db";

export const search = async (search: string, userId: number) => {
  return await db.user.findMany({
    where: {
      AND: [
        {
          NOT: {
            id: userId,
          },
        },
        {
          OR: [
            {
              username: {
                contains: search,
              },
            },
            {
              fullname: {
                contains: search,
              },
            },
          ],
        },
      ],
    },
  });
};
