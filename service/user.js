/* eslint-disable object-curly-newline */
const User = require('../models/User');

const findUsers = () => User.find();

const findUserByProperty = (key, value) => {
    if (key === '_id') {
        return User.findById(value);
    }
    return User.findOne({ [key]: value });
};

const createNewUser = ({ name, email, password, roles, accountStatus }) => {
    const user = new User({
        name,
        email,
        password,
        roles: roles || ['STUDENT'],
        accountStatus: accountStatus || 'PENDING',
    });
    return user.save();
};
module.exports = {
    findUserByProperty,
    createNewUser,
    findUsers,
};
