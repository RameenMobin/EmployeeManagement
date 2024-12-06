const resolvers = {
    Query: {
        employees: async (_, { page = 1, limit = 10, filter }, {user, EmployeeModel }) => {
            if (user.role !== 'Admin') {
                throw new Error('Access denied. Admins only');
            }
            const query = filter || {};
            const employees = await EmployeeModel.find(query)
                .skip((page - 1) * limit)
                .limit(limit)
                .sort({ name: 1 });
            return employees;
        },
        employee: async (_, { id }, {user, EmployeeModel }) => {
            if (user.role !== 'Admin') {
                throw new Error('Access denied. Admins only');
            }
            return await EmployeeModel.findById(id);
        },
    },
    Mutation: {
        createEmployee: async (_, { name, age, class: empClass, subjects }, {EmployeeModel}) => {
            const newEmployee = new EmployeeModel({
                name,
                age,
                class: empClass,
                subjects,
                attendance: 95, 
                role: 'admin',  
            });
            await newEmployee.save();
            return newEmployee;
          },
        updateEmployee: async (_, { id, name, age, class: empClass, subjects }, {EmployeeModel}) => {
            const updatedEmployee = await EmployeeModel.findByIdAndUpdate(
                id,
                { name, age, class: empClass, subjects },
                { new: true } 
            );
            return updatedEmployee;
        },
        deleteEmployee: async (_, { id }, {EmployeeModel}) => {
            const deletedEmployee = await EmployeeModel.findByIdAndDelete(id);
            return deletedEmployee;
        },
    },
};

export default resolvers;
