const router = require("express").Router();

const servingSizes = require("./servingSizes");
router.use("/servingSizes", servingSizes);

const categoriesRouter = require("./categoriesRoute");
router.use("/categories", categoriesRouter);



router.get('/', (req, res) => {
	res.send('welcome /API-REST!');
});

module.exports = router;