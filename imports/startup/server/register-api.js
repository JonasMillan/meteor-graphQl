import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge'
import ResolutionsSchema from '../../api/resolutions/ResolutionsSchema';
import ResolutionResolvers from '../../api/resolutions/resolvers'

const testSchema = `
    type Query {
        hi: String 
        resolutions: [Resolution]
    }
`;

// types definitions on array
const typeDefs = [
    testSchema,
    ResolutionsSchema
];

const resolver = {
    Query: {
        hi(){
            return 'hello world'
        }
    }
};

// merge resolvers 
const resolvers = merge(
    resolver, ResolutionResolvers
)

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({ schema });