const mongoose = require ('mongoose');
const bcrypt = require ('bcryptjs')


const userSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: { 
        type: String,
        required: true,

        enum: ['admin', 'teacher', 'student'] 
    },
    
});

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt (10);
    this.password = await bcrypt.hash(this.password,salt);
});

const User = mongoose.model('User', userSchema);
module.exports = User;