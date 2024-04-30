import { Router } from "express";
import auth from "../middleware/auth";
import uploadMiddleware from "../middleware/upload";
import { getProfile, updateUserProfile } from "../controller/profile";

const profileRouter = Router();

profileRouter.patch("/profile", auth, uploadMiddleware("cover"), updateUserProfile);

profileRouter.get("/profile", auth, getProfile);

export default profileRouter;
