import Products from "./Product.js";
import Reviews from "./Review.js";

//product has many reviews
Products.hasMany(Reviews);

//review belongs to product
Reviews.belongsTo(Products);

export default { Products, Reviews };
