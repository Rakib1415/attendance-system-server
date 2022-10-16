const AdminAttendance = require('../models/AdminAttendance');

const getAdminAttendance = (key, value) => {
    if (key === '_id') return AdminAttendance.findById(value);
    return AdminAttendance.findOne({ key: value });
};

const createAdminAttendance = ({ status, timeLimit }) => {
    const adminAttendance = new AdminAttendance({
        status: status || 'RUNNING',
        timeLimit: timeLimit || 5,
    });
    return adminAttendance.save();
};
module.exports = {
    getAdminAttendance,
    createAdminAttendance,
};
