import React from 'react'
// gql is goint to allow us use graphQL querys and use them
import gql from 'graphql-tag';
//  graphql is goint to conect our query to the react component
import { graphql } from 'react-apollo';
import { withApollo } from "react-apollo"

import ResolutionForm from './components/ResolutionForm'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'

const App = ({ loading, resolutions, client, user }) => {
    if(loading) return null
    return( 
        <div>
            { user._id ? 
                (
                    <div>
                        <h1>{`Wellcome ${user.username}`}</h1>
                        <button onClick={() =>{ 
                            Meteor.logout();
                            client.resetStore();
                            }}
                        > 
                            Logout 
                        </button>
                        <ResolutionForm/>
                        <ul>
                            {resolutions.map(e => <li key= {e._id}>{ e.name }</li>)}
                        </ul>
                    </div>
                ) :
                (   
                    <div>
                        <RegisterForm /> 
                        <LoginForm client={client}/>
                    </div>
                )
            }
        </div>
    )
}

// define a query with gql
const resolutionsQuery = gql`
    query Resolutions {
        resolutions {
            _id
            name
        }
        user {
            _id
            email
            username
        }
    }
`
// graphql is high order component that connect  
export default graphql(resolutionsQuery,{
    props: ({ data }) => ({ ...data })
}
    )( withApollo(App))
