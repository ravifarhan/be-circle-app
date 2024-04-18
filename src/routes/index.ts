import { Router } from "express";
import userRouter from "./userRouter";
import profileRouter from "./profileRouter";
import threadRouter from "./threadRouter";

const router = Router();

router.use("/", userRouter);
router.use("/", profileRouter);
router.use("/", threadRouter);

export default router;