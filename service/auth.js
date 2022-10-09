const bcrypt = require('bcrypt');
const error = require('../utils/error');
const { findUserByProperty, createNewUser } = require('./user');

const registerService = async ({
 name, email, password, roles, accountStatus 
}) => {
    const user = await findUserByProperty('email', email);
    if (user) {
        throw error('User already exists', 400);
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return createNewUser({
        name,
        email,
        password: hash,
        roles,
        accountStatus,
    });
};

module.exports = {
    registerService,
};
