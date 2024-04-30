import { Router } from "express";
import auth from "../middleware/auth";
import { createLike, getCurrentUserLike, getLikes } from "../controller/like";

const likeRouter = Router();

likeRouter.post("/like", auth, createLike );
likeRouter.get("/likes/:threadId", auth, getLikes );
likeRouter.get("/like/:threadId/", auth, getCurrentUserLike );
export default likeRouter;
