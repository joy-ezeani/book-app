import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(234).send("Welcome");
});

app.use("/books", booksRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`App running on port ${port} and DB conected`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
