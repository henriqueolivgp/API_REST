const router = require("express").Router();

const usersRouter = require("./usersRoute");
router.use("/users", usersRouter);

router.get('/', (req, res) => {
	res.send('welcome /API-REST!');
});

module.exports = router;
