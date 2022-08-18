const db = require("../Models/Model");
const User = db.User;
const Op = db.Sequelize;

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

//update user
exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req, body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Succes for update this user"
            });
        } else {
            res.send({
                message: `An error occurred while modifying the user with id=${id}`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error for update this user with id=" +id
        });
    });
};

//delet user
exports.delete = (req, res) => {
    const id = req.params.id;

    User.remove({
        where: { id: id }
    })
    .then(num => { 
        if (num == 1) {
            res.send({
                message: "the deletion of this user is successful"
            });
        } else {
            res.send({
                message: `An error occured while deleting the user with id=${id}`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error for delete this user with id=" +id
        });
    });
};