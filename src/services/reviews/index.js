import express from "express";
// import models from "../../db/models/index.js";
import sequelize from "sequelize";
// const { Products, Reviews } = models;

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.send("heelp");
  } catch (error) {
    console.log(error);
    next(error);
  }
});
router.get("/:id", (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newReview = await Reviews.create({
      text: req.body.text,
      userName: req.body.userName,
      description: req.body.description,
      image: req.body.image,
      price: req.body.price,
    });

    res.send(newReview);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.put("/:id", (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.delete("/:id", (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;
