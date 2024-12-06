const mongoose = require('mongoose');
const Employee = require('./models/Employee'); // Adjust the path if needed

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/employee-management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('Error connecting to MongoDB:', err));

// Add employees
const addEmployees = async () => {
    try {
        const employees = [
            {
                name: 'Alice Johnson',
                age: 30,
                class: 'Engineering',
                subjects: ['Math', 'Science'],
                attendance: 85,
                role: 'employee',
            },
            {
                name: 'Bob Smith',
                age: 25,
                class: 'Marketing',
                subjects: ['Economics', 'Statistics'],
                attendance: 90,
                role: 'employee',
            },
            {
                name: 'Charlie Brown',
                age: 28,
                class: 'Design',
                subjects: ['Art', 'Creativity'],
                attendance: 95,
                role: 'admin',
            },
        ];

        const result = await Employee.insertMany(employees);
        console.log('Employees added:', result);
        mongoose.connection.close();
    } catch (err) {
        console.error('Error adding employees:', err);
        mongoose.connection.close();
    }
};

addEmployees();
