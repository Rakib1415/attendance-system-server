const router = require('express').Router();
const adminAttendanceController = require('../controller/admin-attendance');

router.get('/enable', adminAttendanceController.getEnable);
router.get('/disable', adminAttendanceController.getDisable);

module.exports = router;
