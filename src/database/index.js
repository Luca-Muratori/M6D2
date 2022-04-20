import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  { host: process.env.PGHOST, dialect: "postgres" }
);

export const testDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("db ok");
  } catch (error) {
    console.log("db connection NOT OK");
  }
};

export const syncDb = async () => {
  try {
    await sequelize.sync();
  } catch (error) {
    console.log("fail to sync");
  }
};

export default sequelize;