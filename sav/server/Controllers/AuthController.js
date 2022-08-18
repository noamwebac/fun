const db = require("../Models/Model");
const config = require("../Middleware/Middle");
const { role } = require("../Models/Model");
const User = db.user;
const Role = db;role;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

exports.signup = (req, res) => {
    User.create({
        //register user
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(user => {
        if (req.body.roles) {
            Role.findAll({
                where: {
                    name: {
                        [Op.or]: req.body.roles
                    }
                }
            }).then(roles => {
                user.setRoles(roles).then(() => {
                    res.send({ message: "User register sucess" });
                });
            });
        } else {
            //first role
            user.setRoles([1]).then(() => {
                res.send({ message: "User register with success"});
            });
        }
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};

exports.singin = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        var passwordInvalid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!passwordInvalid) {
            return res.status(401).send({
                accessToken: null,
                message: "Password Invalid"
            });
        }
        var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400
        });
        var authorities = [];
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                authorities.push("ROLE_" + roles[i].name.toUpperCase());
            }
            res.status(200).send({
                id: user.id,
                username: user.username,
                email: user.email,
                roles: authorities,
                accessToken: token
            });
        });
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};