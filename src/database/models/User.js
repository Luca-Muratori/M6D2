import sequelize from "../index.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
  _id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  user_name: { type: DataTypes.STRING },
});

export default User;
