const db = require("../Models/Model");
const ROLES = db.ROLES;
const User = db.user;
checkDuplicate = (req, res, next) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Username is already exist"
            });
            return;
        }
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                res.status(400).send({
                    message: "Email is already exist"
                });
                return;
            }
            next();
        });
    });
};
checkRoleExist = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.lenght; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: "This role does not exist" + req.body.roles[i]
                });
                return;
            }
        }
    }
    next();
}
const Verify = {
    checkDuplicate: checkDuplicate,
    checkRoleExist: checkRoleExist
};

module.exports = Verify;