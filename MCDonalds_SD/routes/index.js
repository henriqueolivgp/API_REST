const router = require("express").Router();

const categoriesRouter = require("./categoriesRoute");
router.use("/categories", categoriesRouter);

router.get('/', (req, res) => {
	res.send('welcome /API-REST!');
});

module.exports = router;