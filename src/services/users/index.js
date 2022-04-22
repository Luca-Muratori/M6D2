import express from "express";
import models from "../../database/models/index.js";
const { User, Reviews } = models;

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: Reviews,
    });
    res.send(users);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: Reviews,
    });
    res.send(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newUser = await User.create({
      user_name: req.body.user_name,
    });
    res.send(newUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updateUser = await User.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    res.send(updateUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const rows = await User.destroy({
      include: Reviews,
      where: {
        id: req.params.id,
      },
    });
    res.send({ rows });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;
