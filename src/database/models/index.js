import Products from "./Product.js";
import Reviews from "./Review.js";
import Category from "./Category.js";
import User from "./User.js";
import ProductCategory from "./ProductCategory.js";

//product has many reviews
Products.hasMany(Reviews, { onDelete: "cascade" });
//review belongs to product
Reviews.belongsTo(Products, { onDelete: "cascade" });

User.hasMany(Reviews, { onDelete: "cascade" });
Reviews.hasMany(User, { onDelete: "cascade" });

//Products has many
Products.belongsToMany(Category, {
  through: { model: "ProductCategory", unique: "false" },
});
//Category has many products
Category.belongsToMany(Products, {
  through: { model: "ProductCategory", unique: "false" },
});

export default { Products, Reviews, ProductCategory, Category, User };
