import React, { useState } from 'react'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createResolution = gql`
    mutation createResolution($name: String!){
        createResolution(name: $name){
            _id
        }
    }
`;

const ResolutionForm = ({ createResolution }) => {
    
    const [ name, setName ] = useState('')
    
    submitForm = () => {
        createResolution({
            variables: {
                name
            }
        })
        .catch(error => console.log(error))
    }

    return(
        <div>
            <input 
                type='text' 
                value={ name }
                onChange={ e => setName(e.target.value) } 
            />   
            <button onClick={submitForm}>Submit</button>
        </div>
    )
}

export default graphql(createResolution, {
    name: 'createResolution',
    options: {
        refetchQueries: ['Resolutions']
    }
})(ResolutionForm)