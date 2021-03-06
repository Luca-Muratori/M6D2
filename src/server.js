import cors from "cors";
import express from "express";
import { testDb, syncDb } from "./database/index.js";
import productsRouter from "./services/products/index.js";
import reviewsRouter from "./services/reviews/index.js";
import userRouter from "./services/users/index.js";
import categoriesRouter from "./services/categories/index.js";

const server = express();
server.use(express.json());
server.use(cors());

const { PORT = 5432 } = process.env;

server.use("/products", productsRouter);
server.use("/reviews", reviewsRouter);
server.use("/users", userRouter);
server.use("/categories", categoriesRouter);

const initialize = async () => {
  try {
    server.listen(PORT, async () => {
      console.log("✅ Server is listening on port " + PORT);
      await testDb();
      await syncDb();
    });

    server.on("error", (error) => {
      console.log("❌ Server is not running due to error : " + error);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

initialize();
