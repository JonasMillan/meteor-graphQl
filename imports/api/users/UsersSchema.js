export default `
    type User {
        _id: String
        email: String
        username: String
    }
    
    extend type Query {
        user: User
    }
`

