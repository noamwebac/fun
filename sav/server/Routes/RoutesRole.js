const { Verify } = require("../Middleware/Singup");
const controller = require("../Controllers/AuthController");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access Control header",
            "Access origin"
        );
        next();
    });
    app.post(
        "/api/auth/signup",
        [
            verify.CheckDuplicate,
            Verify.CheckRolesExisted
        ],
        controller.signup
    );
    app.post("/api/auth/signin", controller.singin);
};