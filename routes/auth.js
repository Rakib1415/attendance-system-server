const router = require('express').Router();
const { registerController, loginController } = require('../controller/auth');
const authenticate = require('../middleware/authenticate');

router.post('/register', registerController);

router.post('/login', loginController);

router.get('/private', authenticate, (req, res, next) => {
    res.status(200).json({ message: 'i am privte route' });
});

module.exports = router;
