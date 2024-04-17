import { Router } from "express";
import { getUsers, login, register } from "../controller/user";
import auth from "../middleware/auth";

const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/users", auth, getUsers);

export default userRouter;