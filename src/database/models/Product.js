import sequelize from "../index.js";
import { DataTypes } from "sequelize";

const Products = sequelize.define("product", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING },
  category: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
  image: { type: DataTypes.TEXT },
  price: { type: DataTypes.FLOAT },
});

//with this we can add new column, and if we refresh on pg we will see the new column
// Product.sync({ alter: true });

export default Products;
