import db from "../db";
import { IThread } from "../type/app";

export const getThreads = async () => {
  return await db.thread.findMany({
    where: {
      threadId: null,
    },
    orderBy: {
      id: "desc",
    },
    include: {
      images: {
        select: {
          image: true,
        },
      },
      author: {
        select: {
          id: true,
          username: true,
          fullname: true,
          password: false,
          profile: {
            select: {
              avatar: true,
            },
          },
        },
      },
      like: true,
      _count: {
        select: {
          replies: true,
          like: true,
        },
      },
    },
  });
};

export const getThread = async (id: number) => {
  return await db.thread.findFirst({
    where: {
      id,
      threadId: null,
    },
    include: {
      images: {
        select: {
          image: true,
        },
      },
      author: {
        select: {
          id: true,
          username: true,
          fullname: true,
          profile: {
            select: {
              avatar: true,
            },
          },
        },
      },
      _count: {
        select: {
          replies: true,
          like: true,
        },
      },
    },
  });
};

export const createThread = async (
  payload: IThread,
  files: { [fieldname: string]: Express.Multer.File[] }
) => {
  const thread = await db.thread.create({
    data: {
      ...payload,
      threadId: payload.threadId ? +payload.threadId : null,
    },
  });

  if (files.image) {
    await db.threadImage.createMany({
      data: files.image.map((image) => {
        return {
          image: image.filename,
          threadId: thread.id,
        };
      }),
    });
  }

  return thread;
};

export const deleteThread = async (idThread: number, userId: number) => {
  const existedThread = await db.thread.findFirst({
    where: {
      id: idThread,
    },
  });

  if (!existedThread) {
    throw new Error("Thread not found");
  }

  if (existedThread.userId !== userId) {
    throw new Error("You do not have permission to delete this thread");
  }

  await db.thread.delete({
    where: {
      id: idThread,
    },
  });

  await db.threadImage.deleteMany({
    where: {
      threadId: idThread,
    },
  });

  return true;
};

export const getReplies = async (threadId: number) => {
  return await db.thread.findMany({
    where: {
      threadId,
    },
    include: {
      images: {
        select: {
          image: true,
        },
      },
      _count: {
        select: {
          replies: true,
        },
      },
      author: {
        include: {
          profile: {
            select: {
              avatar: true,
            },
          },
        },
      },
    },
  });
};

export const getThreadByUser = async (userId: number) => {
  return await db.thread.findMany({
    where: {
      threadId: null,
      userId,
    },
    orderBy: {
      id: "desc",
    },
    include: {
      images: {
        select: {
          image: true,
        },
      },
      author: {
        select: {
          id: true,
          username: true,
          fullname: true,
          password: false,
          profile: {
            select: {
              avatar: true,
            },
          },
        },
      },
      _count: {
        select: {
          replies: true,
          like: true,
        },
      },
    },
  });
}
