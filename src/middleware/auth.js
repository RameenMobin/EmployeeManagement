const jwt = require('jsonwebtoken');
const authMiddleware = (req) => {
    const token = req.headers.authorization || '';
    if (!token) throw new Error('Unauthorized');
    const user = jwt.verify(token, process.env.JWT_SECRET);
    return user;
};
module.exports = authMiddleware;
