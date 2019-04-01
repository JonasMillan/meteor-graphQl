import React, { useState } from 'react'

const LoginForm = () => {

    const  login = () => {
        
        Meteor.loginWithPassword(email, password,
        error => {
            console.log(error)
        })
    }

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    return(
        // <form onSubmit={}>
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
        // </form>
    )
}
export default LoginForm