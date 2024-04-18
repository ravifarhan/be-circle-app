import express from "express";
import * as dotenv from "dotenv";
import db from "./src/db";
import router from "./src/routes";
import { follow, getFollowers } from "./src/controller/follow";
import path from "path";

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "src/uploads")));
app.use(router);  

app.get("/", async (req, res) => {
  const listUsers = await db.user.findMany();
  const singleUser = await db.user.findFirst({
    where: {
      id: 1,
    },
  });
  res.send({ listUsers, singleUser });
});

app.post("/follow", follow);
app.get("/followers/:followingId", getFollowers);

app.listen(PORT, async () => {
  await db.$connect();
  console.log(`Server running on port ${PORT}`);
});
