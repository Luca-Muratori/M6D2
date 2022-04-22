import sequelize from "../index.js";
import { DataTypes } from "sequelize";

const UserReview = sequelize.define(
  "UserReview",
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
  },
  { timeStamp: false }
);

UserReview.sync({ alter: true });

export default UserReview;