const { Schema, model } = require('mongoose');

const adminAttendanceSchema = new Schema(
    {
        status: {
            type: String,
            required: true,
            enum: ['RUNNING', 'COMPLETED'],
            default: 'RUNNING',
        },
        timeLimit: {
            type: Number,
            required: true,
            min: 1,
            max: 30,
            default: 5,
        },
    },
    // eslint-disable-next-line comma-dangle
    { timestamps: true }
);

const AdminAttendance = model('AdminAttendance', adminAttendanceSchema);

module.exports = AdminAttendance;
