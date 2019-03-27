import React from 'react'
// gql is goint to allow us use graphQL querys and use them
import gql from 'graphql-tag';
//  graphql is goint to conect our query to the react component
import { graphql } from 'react-apollo';

const App = ({ data }) => <h1>{data.hi}</h1>

// define a query with gql
const hiQuery = gql`
    {
        hi
    }
`
// graphql is high order component that connect  
export default graphql(hiQuery)(App)
