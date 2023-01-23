const categoriesRoute = require("express").Router();
const controller = require("../controllers/categories");

categoriesRoute.get("/all",         controller.getAll);
categoriesRoute.post("/post",       controller.insert);
categoriesRoute.delete("/delete",   controller.delete);

module.exports = categoriesRoute;

