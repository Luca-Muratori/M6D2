import sequelize from "../index.js";
import { DataTypes } from "sequelize";

const Reviews = sequelize.define("reviews", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  text: { type: DataTypes.TEXT, allowNull: false },
  rating: { type: DataTypes.FLOAT },
});

export default Reviews;
