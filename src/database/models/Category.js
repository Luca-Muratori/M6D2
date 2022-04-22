import sequelize from "../index.js";
import { DataTypes } from "sequelize";

const Category = sequelize.define("category", {
  _id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  category_name: { type: DataTypes.STRING },
});

Category.sync({ alter: true });

export default Category;
