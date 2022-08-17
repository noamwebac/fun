const jwt = require("jsonwebtoken");
const User = require("../Models/UserModel");
const config = require("../Config/Test");

//register
module.exports.Register = (req, res, next) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({
        where: {
            email: email
        }
    })
        .then(user => {
            if (!user) {
                User.create({
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    hash: password
                })
                    .then(response => {
                        res.json(response);
                    })
                    .catch(err => console.log(err));
            } else {
                res.json({
                    message: 'User already exists'
                });
            }
        })
        .catch(err => console.log(err));
};

