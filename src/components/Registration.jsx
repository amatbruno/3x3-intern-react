import React from 'react'
import '../components/Registration.css'

function Registration() {
    return (
        <div className="sign-up-container">
            <form>
                <h1>REGISTER</h1>
                <span>Register with your email and password to discover all the features!</span>
                <input type="text" placeholder='Introduce your name' />
                <input type="email" placeholder='Introduce your email' />
                <input type="password" placeholder='Introduce your password' />
                <input type="password" placeholder='Confirm your password' />
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default Registration