import { Router } from "express";
import auth from "../middleware/auth";
import { follow, getFollowers, getFollowings } from "../controller/follow";

const followRouter = Router();

followRouter.post("/follow", auth, follow );
followRouter.get("/follower/:followingId", auth, getFollowers );
followRouter.get("/following/:followerId", auth, getFollowings );

export default followRouter;  
