const { gql } = require('apollo-server');

// Define the Employee type, Query, and Mutation in GraphQL schema
module.exports = gql`
    type Employee {
        id: ID!
        name: String!
        age: Int!
        class: String
        subjects: [String]
        attendance: Int
        role: String
        createdAt: String
        updatedAt: String
    }

    type Query {
        employees(page: Int, limit: Int, filter: EmployeeFilterInput): [Employee]
        employee(id: ID!): Employee
    }
    
    input EmployeeFilterInput {
        name: String
        role: String
    }

    type Mutation {
        createEmployee(name: String!, age: Int!, class: String, subjects: [String]): Employee
        updateEmployee(id: ID!, name: String, age: Int, class: String, subjects: [String]): Employee
        deleteEmployee(id: ID!): Employee
    }
`;
