const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "dctklfcs",
  "dctklfcs",
  "UCNn5MyRqoaP70KqTCQdkza6B3IAlp_b",
  {
    host: "otto.db.elephantsql.com",
    dialect: "postgres",
  }
);

module.exports = sequelize;
