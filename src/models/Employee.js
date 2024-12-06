const mongoose = require('mongoose');

// Define the schema for Employee
const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    class: {
        type: String,
    },
    subjects: {
        type: [String],
        default: [],
    },
    attendance: {
        type: Number,
        default: 0,
    },
    role: {
        type: String,
        enum: ['admin', 'employee'],
        default: 'employee',
    },
}, {
    timestamps: true, 
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
