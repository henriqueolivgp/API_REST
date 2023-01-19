const router = require("express").Router();

router.get('/api/v1', (req, res) => {
	res.send('Welcome API-REST!!!');
});

module.exports = router;
