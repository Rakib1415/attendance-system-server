/* eslint-disable object-curly-newline */
const userService = require('../service/user');
const authService = require('../service/auth');
const error = require('../utils/error');
const isValidObjectId = require('../utils/validate');

const getusers = async (_req, res, next) => {
    try {
        const users = await userService.findUsers();
        if (!users) {
            throw error('User not Found!', 401);
        }
        return res.status(200).json({ message: 'success', users });
    } catch (e) {
        return next(e);
    }
};

const getUserById = async (req, res, next) => {
    const { userId } = req.params;
    try {
        if (!isValidObjectId(userId)) {
            throw error('Invalid userId!', 401);
        }
        const user = await userService.findUserByProperty('_id', userId);
        if (!user) {
            throw error('User not found!', 401);
        }
        return res.status(200).json({ message: 'success', user });
    } catch (e) {
        return next(e);
    }
};

const deleteUserById = async (req, res, next) => {
    const { userId } = req.params;
    try {
        if (!isValidObjectId(userId)) {
            throw error('Invalid userId!', 401);
        }
        const user = await userService.findUserByProperty('_id', userId);
        if (!user) {
            throw error('User not found!', 401);
        }
        await user.remove();
        return res.status(203).send();
    } catch (e) {
        return next(e);
    }
};

const postUser = async (req, res, next) => {
    const { name, email, password, roles, accountStatus } = req.body;
    try {
        const user = await authService.registerService({
            name,
            email,
            password,
            roles,
            accountStatus,
        });
        return res.status(200).json({ message: 'success', user });
    } catch (e) {
        return next(e);
    }
};

const patchUserById = async (req, res, next) => {
    const { userId } = req.params;
    const { name, roles, accountStatus } = req.body;
    try {
        if (!isValidObjectId(userId)) {
            throw error('Invalid userId!', 401);
        }
        const user = await userService.findUserByProperty('_id', userId);
        if (!user) {
            throw error('User not found!', 401);
        }
        user.name = name ?? user.name;
        user.roles = roles ?? user.roles;
        user.accountStatus = accountStatus ?? user.accountStatus;
        await user.save();
        return res.status(200).json({ message: 'update successfully' });
    } catch (e) {
        return next(e);
    }
};

module.exports = {
    getusers,
    getUserById,
    deleteUserById,
    postUser,
    patchUserById,
};
