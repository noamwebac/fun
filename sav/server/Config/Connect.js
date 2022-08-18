const DbConfig = require("./DbConfig.js");
const Sequelize = require("sequelize");
const { DB, USER, PASSWORD } = require("./DbConfig.js");

const SequelizeInstance = new Sequelize(
    DbConfig.DB,
    DbConfig.USER,
    DbConfig.PASSWORD, {
        host: DbConfig.HOST,
        dialect: DbConfig.dialect,
});

console.log(DB, USER, PASSWORD);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = SequelizeInstance;

db.user = require("../Models/Model")(SequelizeInstance, Sequelize);

module.exports = db;