import sequelize from "../index.js";
import { DataTypes } from "sequelize";

const ProductCategory = sequelize.define(
  "ProductCategory",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  },
  { timeStamp: false }
);

export default ProductCategory;
