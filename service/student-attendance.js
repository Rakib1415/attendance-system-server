/* eslint-disable no-underscore-dangle */
const StudentAttendance = require('../models/StudentAttendance');
const adminAttendanceService = require('./admin-attendance');
const error = require('../utils/error');

const createStudentAttendance = async (userId) => {
    const adminAttendance = await adminAttendanceService.getAdminAttendance('status', 'RUNNING');
    if (!adminAttendance) {
        throw error('attendance not running!', 401);
    }
    const existingStudentAttendance = await StudentAttendance.findOne({
        user: userId,
        adminAttendance: adminAttendance._id,
    });
    if (existingStudentAttendance) {
        throw error('already register!', 401);
    }
    const studentAttendance = new StudentAttendance({
        user: userId,
        adminAttendance: adminAttendance._id,
    });
    return studentAttendance.save();
};

module.exports = {
    createStudentAttendance,
};
