const jwt = require('jsonwebtoken');
require('dotenv').config();

const payload = { id: '12345', role: "Admin" }; // Example payload

const token = jwt.sign(payload,
     process.env.JWT_SECRET, 
     { expiresIn: '1h' });

console.log("Generated Token:", token);
