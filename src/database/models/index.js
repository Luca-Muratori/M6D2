import Products from "./Product.js";
import Reviews from "./Review.js";

//product has many reviews
Products.hasMany(Reviews, { onDelete: "cascade" });

//review belongs to product
Reviews.belongsTo(Products, { onDelete: "cascade" });

export default { Products, Reviews };
