import sequelize from "../index.js";
import { DataTypes } from "sequelize";

const ProductCategory = sequelize.define(
  "ProductCategory",
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
  },
  { timeStamp: false }
);

ProductCategory.sync({ alter: true });

export default ProductCategory;
