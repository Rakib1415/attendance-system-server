const router = require('express').Router();
const userControllers = require('../controller/user');

// get user by userID
router.get('/:userId', userControllers.getUserById);

// update user by userID
router.patch('/:userId', userControllers.patchUserById);

// delete user by userID
router.delete('/:userId', userControllers.deleteUserById);

// get all users
router.get('/', userControllers.getusers);

// create user
router.post('/', userControllers.postUser);
module.exports = router;
