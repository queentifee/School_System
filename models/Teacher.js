const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    subjects: [
        {
            type: String,
            required: true,
        }
    ],
    classes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Class',
        }
    ],
    role: {
        type: String,
        default: 'teacher',  // role will be 'teacher'
    }
}, { timestamps: true });

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;