import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge'

import ResolutionsSchema from '../../api/resolutions/ResolutionsSchema';
import UsersSchema from '../../api/users/UsersSchema';

import ResolutionResolvers from '../../api/resolutions/resolvers'
import UsersResolvers from '../../api/users/resolvers'



// types definitions on array
const typeDefs = [
    ResolutionsSchema,
    UsersSchema
];


// merge resolvers 
const resolvers = merge(
    ResolutionResolvers, UsersResolvers
)

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({ schema });