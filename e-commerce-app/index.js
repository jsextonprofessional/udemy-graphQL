const { ApolloServer, gql } = require("apollo-server");

// Scalar types: String, Int, Float, Boolean, ID
// ! makes a type non-nullable

const typeDefs = gql`
	type Query {
		hello: String!
		numberOfAnimals: Int
		price: Float
		isCool: Boolean
	}
`;

const resolvers = {
	Query: {
		hello: () => {
			return null;
		},
		numberOfAnimals: () => {
			return 55;
		},
		price: () => {
			return 2345.5432;
		},
		isCool: () => {
			return false;
		}
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.listen().then(({ url }) => {
	console.log("Server is ready at " + url);
});