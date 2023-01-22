const usersRouter = require("express").Router();
const controller = require("../controllers/users");
const db = require("../db");

/*usersRouter.get("/", controller.getAll);
usersRouter.get("/:id", controller.getById);
usersRouter.post("/create", controller.create);
usersRouter.put("/update", controller.update);
usersRouter.delete("/delete", controller.delete);*/

const usersrouter = usersRouter();
usersrouter.get('/', controller);

module.exports = usersRouter;