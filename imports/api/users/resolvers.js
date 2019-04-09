export default {
    Query: {
        user(obj, args, { user }) {
            return user || {}
        }
    },
    User: {
        email: ({ emails }) => emails ? emails[0].address : '',
        username: ({ emails }) => emails ? emails[0].address.slice(0, emails[0].address.indexOf('@')) : ''
    }
};