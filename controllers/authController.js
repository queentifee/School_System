const User = require ('../models/User');
const bcrypt = require ('bcryptjs')
const jwt = require('jsonwebtoken');

// Register User
exports.registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
        return res.status(400).json({ msg: 'Please provide all required fields' });
      }
    try {
        let user = await User.findOne ({ email });
        if (user) {
            return res.status(400),json({ msg: 'User already exists'});
        }
        user = new User ({ name, email, password, role });
        await user.save ();

        const payload = { user: { id: user.id, role: user.role } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status (201).json ({ token });
    } catch (err) {
        console.error (err.message);
        res.status(500).send('Server Error');
    }
    };

    // Login User
    exports.loginUser = async (req, res) => {
        const { email, password } = req.body;
        try {
            let user = await User.findOne ({ email });
            if (!user){
                return res.status(400).json({ msg: 'Invalid Credentials' });
            }
        const isMatch = await bcrypt.compare (password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials'});
        }

        const payload = { user: { id: user.id, role: user.role } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
        }
    };
// module.exports = authController;