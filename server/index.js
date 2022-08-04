import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json({ limit: "30mb", extended: true }));

dotenv.config();
const PORT = process.env.PORT;
const MONGO_DB = process.env.MONGO_DB;
mongoose
  .connect(MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listen on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
