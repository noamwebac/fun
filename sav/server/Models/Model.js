const config = require("../Config/DbConfig");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect
    }
);

const db = {};
db.Sequelize = Sequelize;
db.Sequelize = sequelize;

db.role = require("./RoleModel")(sequelize, Sequelize);

/*db.role.belongTomany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});
db.user.belongTomany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});*/
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;