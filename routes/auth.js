const router = require('express').Router();
const registerController = require('../controller/auth');

router.post('/register', registerController);

router.post('/login', (req, res) => {
    res.status(200).json({ message: 'i am a login route' });
});

module.exports = router;
