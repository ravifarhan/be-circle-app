import { Router } from "express";
import { search } from "../controller/search";
import auth from "../middleware/auth";

const searchRouter = Router();

searchRouter.post("/search", auth, search);

export default searchRouter;
