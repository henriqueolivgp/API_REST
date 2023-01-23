const servingSizeRoute = require("express").Router();
const controller = require("../controllers/categories");

servingSizeRoute.get("/all",         controller.getAll);
servingSizeRoute.post("/post",       controller.insert);
servingSizeRoute.delete("/delete",   controller.delete);

module.exports = servingSizeRoute;

