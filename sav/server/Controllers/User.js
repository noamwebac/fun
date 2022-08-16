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
            message: err.message || "Error for creating user"
        });
    });
};

//find All user
exports.findAll = (req, res) => {
    const username = req.body.username;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

    User.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message: err.message || "Error for find user"
        });
    });
};

//find One user
exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No user exist with id=${id}`
                });
            }
        })
        .catch(err => {
        res.status(500).send({
            message: "Error retrieving this user whith id=" + id
        });
    });
};