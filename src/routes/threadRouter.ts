import { Router } from "express";
import auth from "../middleware/auth";
import uploadMiddleware from "../middleware/upload";
import { getThread, getThreads, createThread } from "../controller/thread";

const threadRouter = Router();

threadRouter.post("/thread", auth, uploadMiddleware("cover"), createThread );
threadRouter.get("/threads", auth, getThreads );
threadRouter.get("/thread/:id", auth, getThread );

export default threadRouter;
