import sequelize from "../index.js";
import { DataTypes } from "sequelize";

const Reviews = sequelize.define("reviews", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  text: { type: DataTypes.TEXT, allowNull: false },
  userName: { type: DataTypes.STRING, allowNull: false },
  // productId: {},
});

Reviews.sync({ alter: true });

export default Reviews;
