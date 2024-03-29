module.exports = app => {
    const user = require("../Controllers/AuthController");
    var router = require("express").Router();
    
    //new user
    router.post("/register", user.signup.Register);
    //login user
    router.post("/login", LoginController.Login);
    //view all user
    router.get("/", user.findAll);
    //view one user
    router.get("/:id", user.findOne);
    //update a user
    router.put("/:id", user.update);
    //delete a user
    router.delete("/:id", user.delete);

    app.use("/api/user", router);
};