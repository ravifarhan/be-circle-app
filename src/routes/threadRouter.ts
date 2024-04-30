import { Router } from "express";
import auth from "../middleware/auth";
import uploadMiddleware from "../middleware/upload";
import { getThread, getThreads, createThread, getReplies, getThreadByUser } from "../controller/thread";

const threadRouter = Router();

threadRouter.post("/thread", auth, uploadMiddleware("image"), createThread );
threadRouter.get("/threads", getThreads );
threadRouter.get("/thread/:id", getThread );
threadRouter.get("/threads/:userId",  getThreadByUser );
threadRouter.get("/replies/:id", auth, getReplies );

export default threadRouter;
