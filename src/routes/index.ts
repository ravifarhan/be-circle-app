import { Router } from "express";
import userRouter from "./userRouter";
import profileRouter from "./profileRouter";

const router = Router();

router.use("/", userRouter);
router.use("/", profileRouter);

export default router;