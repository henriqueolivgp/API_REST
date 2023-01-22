const usersRoute = require("express").Router();
const controller = require("../controllers/users");

usersRoute.get("/all",         controller.getAll);
usersRoute.get("/:id",         controller.getById);
usersRoute.post("/post",       controller.insert);
usersRoute.delete("/delete",   controller.delete);

module.exports = usersRoute;

