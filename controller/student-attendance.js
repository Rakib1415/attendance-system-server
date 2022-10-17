/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
const { isAfter, addMinutes } = require('date-fns');
const adminAttendanceService = require('../service/admin-attendance');
const error = require('../utils/error');
const studentAttendanceService = require('../service/student-attendance');

const getStudentAttendance = async (req, res, next) => {
    try {
        const studentAttendance = await studentAttendanceService.createStudentAttendance(
            req.user._id
        );
        return res.status(201).json({ message: 'Successfully register', studentAttendance });
    } catch (e) {
        return next(e);
    }
};

const getAttendanceStatus = async (req, res, next) => {
    try {
        const running = await adminAttendanceService.getAdminAttendance('status', 'RUNNING');
        if (!running) {
            throw error('attendance not running!', 401);
        }
        const started = addMinutes(new Date(running.createdAt), running.timeLimit);
        if (isAfter(new Date(), started)) {
            running.status = 'COMPLETED';
            await running.save();
        }
        return res.status(201).json(running);
    } catch (e) {
        return next(e);
    }
};

module.exports = {
    getAttendanceStatus,
    getStudentAttendance,
};
