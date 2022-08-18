const { authJWT } = require("../Middleware/Middle");
const controller = require("../Controllers/UserController");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access controler header",
            "Access origin"
        );
        next();
    });
    app.get("/api/test/all", controller.allAccess);
    app.get(
        "/api/test/user",
        [authJWT.verifyToken],
        controller.userBoard
    );
    app.get(
        "/api/test/mod",
        [authJWT.verifyToken, authJWT.isModerator],
        controller.moderatorBoard
    );
    app.get(
        "/api/test/admin",
        [authJWT.verifyToken, authJWT.isAdmin],
        controller.adminBoard
    );
};