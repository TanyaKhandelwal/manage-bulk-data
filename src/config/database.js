require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect:"mysql",
  logging: false, 
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to MySQL successful!");
  } catch (error) {
    console.error("Unable to connect to MySQL:", error);
  }
})();

module.exports = sequelize;