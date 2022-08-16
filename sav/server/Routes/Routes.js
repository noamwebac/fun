module.exports = app => {
    const user = require("../Controllers/User.js");
    var router = require("express").Router();
    
    //new user
    router.post("/", user.create);
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