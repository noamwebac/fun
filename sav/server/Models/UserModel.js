const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Config/Test");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstname:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hash: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

sequelize.sync().then(() => {
    console.log('User table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

User.beforeCreate((user, options) => {
    return bcrypt.hash(user.hash, saltRounds)
        .then(hash => {
            user.hash = hash;
        })
        .catch(err => {
            console.log(err)
            throw new Error();
        });
});

User.prototype.authentificate = async function (value, callback) {
    await bcrypt.compare(value, this.hash, function(err, same){
        if (err){
            console.log(err)
            callback(err)
        } else {
            console.log('authentificate', err, same)
            callback(err, same)
        }
    })
}

module.exports = User;