import React, { useState } from 'react'

const LoginForm = ({ client }) => {

    const  login = () => {
        
        Meteor.loginWithPassword(email, password,
        error => {
            if(!error){
                client.resetStore()
            }
            console.log(error)
        })
    }

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    return(
        <div>
            <input
                type='email'
                value={ email }
                onChange={ e => setEmail(e.target.value) } 
            />
            <input
                type='password'
                value={ password }
                onChange={ e => setPassword(e.target.value) } 
            />   
            <button type='submit' onClick={() => login()}>Login User</button>
        </div>
    )
}
export default LoginForm