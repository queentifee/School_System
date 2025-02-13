const mongoose = require ('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
    },
    grade: {
        type: String,
        required: true,
    },
    classes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Class',
        }
    ],
    role: {
        type: String,
        default: 'student',  // role will be 'student'
    }
}, { timestamps: true });

const Student = mongoose.model ('Student', studentSchema);

module.exports = Student;