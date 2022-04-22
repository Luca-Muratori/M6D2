import models from "../../database/models/index.js";
import express from "express";
const { Products, Category, ProductCategory } = models;

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      include: Products,
    });
    res.send(categories);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: Products,
    });
    res.send(category);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name,
    });
    res.send(newCategory);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/:categoryId/product/:productId", async (req, res, next) => {
  try {
    const newProductCategory = await ProductCategory.create({
      categoryId: req.params.categoryId,
      productId: req.params.productId,
    });
    res.send(newProductCategory);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updateCategory = await Category.update(req.body, {
      returning: true,
      where: { id: req.params.id },
    });
    res.send(updateCategory);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const rows = await Category.destroy({ where: { id: req.params.id } });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;
