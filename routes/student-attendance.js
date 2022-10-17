const router = require('express').Router();
const studentAttendanceController = require('../controller/student-attendance');

router.get('/status', studentAttendanceController.getAttendanceStatus);
router.get('/', studentAttendanceController.getStudentAttendance);

module.exports = router;
