// SCHEMAS
export default`
type Resolution {
    _id: String!
    name: String!
}

type Mutation {
    createResolution(name: String!): Resolution
}`