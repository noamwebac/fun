const db = require("../Models");
const User = db.User;
const Op = db.Sequelize.Op;

//register new user
exports.create = (req, res) => {
    if (!req.body.username) {
        res.status(400).send({
            message: 'Remplir les champs'    
        });
        return;
    }

    //create user
    const user = {
        firstname: req.body.firstname,
        username: req.body.username,
        age: req.body.age
    };

    //save user in db
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error for creating user"
            });
        });
};

