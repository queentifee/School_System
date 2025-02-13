const mongoose = require ('mongoose');

const classSchema = new mongoose.Schema ({
    className: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true,
    },
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student',
        }
    ],
    schedule: {
        type: String, // e.g., 'Monday and Wednesday 9:00 AM - 11:00 AM'
    }
}, { timestamps: true });

const Class = mongoose.model ('Class', classSchema);

module.exports = Class;