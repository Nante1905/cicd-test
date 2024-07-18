import express = require("express");
import { Employe } from "../database/entity/Employe";
import AppDataSource from "../database/data-source";
import { authMiddleware } from "../middlewares/auth.middleware";

export const empRoute = express.Router();
// empRoute.use(authMiddleware);

empRoute.get("/", async (req, res) => {
  // const empRepo = AppDataSource.getRepository(Employe);
  // const employes = await empRepo.find({
  //   relations: ["direction"],
  //   select: {
  //     id: true,
  //     nom: true,
  //     age: true,
  //     direction: {
  //       nom: true,
  //     },
  //   },
  // });

  AppDataSource.manager
    .transaction(async (manager) => {
      await manager.getRepository(Employe).save({
        nom: "test 2",
        id_direction: 1,
        age: 30,
      });
      throw new Error("test transaction");
    })
    .then(() => {
      res.json("saved");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});
