const { model, Schema } = require('mongoose');

const profileSchema = new Schema({
    firstName: {
        type: String,
        minlength: [2, 'name is too short'],
        maxlength: [20, 'name is too long'],
    },
    lastName: {
        type: String,
        minlength: [2, 'name is too short'],
        maxlength: [20, 'name is too long'],
    },
    phoneNumber: {
        type: String,
        required: true,
        minlength: [11, 'phone number is invalid'],
        maxlength: [14, 'phone number is invalid'],
    },
    avatar: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Profile = model('Profile', profileSchema);

module.exports = Profile;
