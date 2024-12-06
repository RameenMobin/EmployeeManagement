const { ApolloServer } = require('apollo-server');
require('dotenv').config();
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');
const connectDB = require('./config/db');
const authMiddleware = require('./middleware/auth');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    context: ({ req }) => {
        const user = authMiddleware(req);
        return {EmployeeModel: require('./models/Employee'), user };
    },
});

connectDB()
server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});