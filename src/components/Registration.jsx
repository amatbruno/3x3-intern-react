import React from 'react'

function Registration() {
    return (
        <div className="container">
            <div className="form-container sign-in">
                <form>
                    <h1>REGISTER</h1>
                    <span>Or use your email for registration</span>
                    <input type="text" placeholder='Introduce your email' />
                    <input type="password" placeholder='Introduce your password' />
                    <button>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Registration