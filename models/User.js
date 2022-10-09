const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, 'name is too short'],
        maxlength: [20, 'name is too long'],
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: (props) => `Invalid email ${props.value}`,
        },
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'password is too short'],
    },
    roles: {
        type: [String],
        required: true,
        default: ['STUDENT'],
    },
    accountStatus: {
        type: String,
        required: true,
        enum: ['ACTIVE', 'PENDING', 'REJECT'],
        default: 'PENDING',
    },
});

const User = model('User', userSchema);

module.exports = User;
