import express = require("express");
// // "start": "ts-node src/index.ts",
// "migration:generate": "typeorm migration:generate -d src/database",
import AppDataSource from "./database/data-source";
import { empRoute } from "./routes/employe";

const app = express();

const main = async () => {
  await AppDataSource.initialize();

  app.use("/emps", empRoute);

  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
};

main();

