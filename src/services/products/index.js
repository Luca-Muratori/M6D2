import express from "express";
import models from "../../database/models/index.js";
const { Products, Reviews } = models;

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await Products.findAll({
      //with this command we see all the reviews of the product
      include: Reviews,
    });
    res.send(products);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const product = await Products.findByPk(req.params.id);
    res.send(product);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newProduct = await Products.create({
      name: req.body.name,
      category: req.body.category,
      description: req.body.description,
      image: req.body.image,
      price: req.body.price,
    });
    res.send(newProduct);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updatedProduct = await Products.update(req.body, {
      //return all the product's info
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    res.send(updatedProduct);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const rows = await Products.destroy({
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
