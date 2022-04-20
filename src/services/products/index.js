import express from "express";
import Products from "../../database/models/Product.js";
// const { Products, Reviews } = models;

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.send("hello");
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
    const newProduct = await Products.create(req.body);
    res.send(newProduct);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updatedProduct = await Products.update(req.body, {
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
