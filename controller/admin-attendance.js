/* eslint-disable prettier/prettier */
const adminAttendanceService = require('../service/admin-attendance');
const error = require('../utils/error');

const getEnable = async (_req, res, next) => {
    try {
        let adminAttendance = await adminAttendanceService.getAdminAttendance(
            'status',
            'RUNNING',
        );
        if (adminAttendance) {
            throw error('already running existing attendance', 400);
        }
        adminAttendance = await adminAttendanceService.createAdminAttendance({});
        return res.status(201).json({ message: 'success', adminAttendance });
    } catch (e) {
        return next(e);
    }
};

const getDisable = async (_req, res, next) => {
    try {
        const adminAttendance = await adminAttendanceService.getAdminAttendance(
            'status',
            'RUNNING',
        );
        if (!adminAttendance) {
            throw error('Do not exist running attendance');
        }
        adminAttendance.status = 'COMPLETED';
        const updatedAttendance = await adminAttendance.save();
        return res.status(201).json({ message: 'successfully updated', updatedAttendance });
    } catch (e) {
        return next(e);
    }
};

module.exports = {
    getEnable,
    getDisable,
};
