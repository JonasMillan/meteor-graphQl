import React from 'react'
// gql is goint to allow us use graphQL querys and use them
import gql from 'graphql-tag';
//  graphql is goint to conect our query to the react component
import { graphql } from 'react-apollo';

import ResolutionForm from './components/ResolutionForm'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'

const App = ({ loading, resolutions }) => {
    if(loading) return null
    return( 
        <div>
            <RegisterForm />
            <LoginForm />
            <ResolutionForm />
            <button onClick={() => Meteor.logout()}> Logout </button>
            <ul>
                {resolutions.map(e => <li key={e._id}>{e.name}</li>)}
            </ul>
        </div>
    )
}

// define a query with gql
const resolutionsQuery = gql`
    query Resolutions {
        hi
        resolutions {
            _id
            name
        }
    }
`
// graphql is high order component that connect  
export default graphql(resolutionsQuery,{
    props: ({data}) => ({ ...data })
}
    )(App)
