import { Router } from "express";
import userRouter from "./userRouter";
import profileRouter from "./profileRouter";
import threadRouter from "./threadRouter";
import likeRouter from "./likeRouter";
import followRouter from "./followRouter";
import searchRouter from "./searchRouter";

const router = Router();

router.use("/", userRouter);
router.use("/", profileRouter);
router.use("/", threadRouter);
router.use("/", likeRouter);
router.use("/", followRouter);
router.use("/", searchRouter);

export default router;