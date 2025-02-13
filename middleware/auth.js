const jwt = require ('jsonwebtoken');

module.exports = (req, res, next) => {
    // Get the Authorization header
    const authHeader = req.header('Authorization');
    
    // Check if the Authorization header is present and starts with 'Bearer'
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    
    // Extract the token from the header
    const token = authHeader.split(' ')[1];

try {
    const decoded = jwt.verify (token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
} catch (err) {
    res.status(401).json ({ msg: 'Token is not valid '});
}
};