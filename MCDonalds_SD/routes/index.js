const router = require("express").Router();

router.get('/', (req, res) => {
	res.send('welcome /API-REST!');
});

module.exports = router;

