import express from "express";
import models from "../../database/models/index.js";
import sequelize from "sequelize";
const { Reviews, Products } = models;

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const reviews = await Reviews.findAll({
      //with this command we see the product of the review
      include: Products,
    });
    res.send(reviews);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const review = await Reviews.findByPk(req.params.id);
    res.send(review);
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
      productId: req.body.productId,
    });

    res.send(newReview);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updatedReview = await Reviews.update(req.body, {
      //return all the Review's info
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    res.send(updatedReview);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const rows = await Reviews.destroy({
      includes: Products,
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
