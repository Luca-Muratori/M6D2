import cors from "cors";
import express from "express";
import { testDb } from "./database/index.js";
import productsRouter from "./services/products/index.js";
import reviewsRouter from "./services/reviews/index.js";

const server = express();
server.use(express.json());
server.use(cors());

const { PORT = 5432 } = process.env;

server.use("/products", productsRouter);
server.use("/reviews", reviewsRouter);

const initialize = async () => {
  try {
    server.listen(PORT, async () => {
      console.log("✅ Server is listening on port " + PORT);
      //    console.table(listEndpoints(server));
      await testDb();
      //   await syncDB();
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
