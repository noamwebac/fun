const DbConfig = require("./DbConfig");
const Sequelize = require("Sequelize");

const Sequelize = new Sequelize(
    DbConfig.DB,
    DbConfig.USER,
    DbConfig.PASSWORD, {
        host: DbConfig.HOST,
        dialect: DbConfig.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorial = require("./tutorials.model.js")(sequelize, Sequelize);

module.exports = db;