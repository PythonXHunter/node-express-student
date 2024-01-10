const router = require('express').Router();

router.get('/', (req, res) => {
	res.send("<h1>Testing Route</h1>");
})

module.exports = router;