import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    port: process.env.PGPORT,
    host: process.env.PGHOST,
    dialect: "postgres",
    ...(process.env.NODE_ENV === "production" && {
      dialectOptions: { ssl: { required: true, rejectUnauthorized: false } },
    }),
  }
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
    console.log("sync ok");
  } catch (error) {
    console.log(error, "fail to sync");
  }
};

export default sequelize;
