const DbConfig = require("./DbConfig");
const Sequelize = require("sequelize");

const SequelizeInstance = new Sequelize(
    DbConfig.DB,
    DbConfig.USER,
    DbConfig.PASSWORD, {
        host: DbConfig.HOST,
        dialect: DbConfig.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = SequelizeInstance;

db.tutorial = require("./DbUser.js")(SequelizeInstance, Sequelize);

module.exports = db;