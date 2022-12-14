const { registerService, loginService } = require('../service/auth');
const error = require('../utils/error');

const registerController = async (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return error('Invalid data', 400);
    }
    try {
        const user = await registerService({ name, email, password });
        return res.status(201).json({ message: 'User created successfully', user });
    } catch (e) {
        return next(e);
    }
};

const loginController = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const token = await loginService(email, password);
        return res.status(200).json({ message: 'login successfully', token });
    } catch (e) {
        return next(e);
    }
};

module.exports = {
    loginController,
    registerController,
};
