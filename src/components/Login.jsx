import React from 'react'
import './Login.css'

import { FaGoogle, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";


function Login() {
    return (
        <div className="container" id='container'>
            <div className="form-container sign-up">
                <form>
                    <h1>Create Account</h1>
                    <div className="social-icons">
                        <i><FaGoogle /></i>
                        <i><FaGithub /></i>
                        <i><FaLinkedin /></i>
                        <i><FaFacebook /></i>
                        
                    </div>
                    <span>Or use your email for registration</span>
                    <input type="name" placeholder='Introduce your name'/>
                    <input type="text" placeholder='Introduce your email'/>
                    <input type="password" placeholder='Introduce your password'/>
                    <input type="password" placeholder='Confirm your password'/>
                    <button>Sign Up</button>
                </form>
            </div>

            <div className="form-container sign-in">
                <form>
                    <h1>Sign In</h1>
                    <div className="social-icons">
                        <i><FaGoogle /></i>
                        <i><FaGithub /></i>
                        <i><FaLinkedin /></i>
                        <i><FaFacebook /></i>
                        
                    </div>
                    <span>Or use your email for registration</span>
                    <input type="text" placeholder='Introduce your email'/>
                    <input type="password" placeholder='Introduce your password'/>
                    <button>Sign In</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your credentials to use
                            all of our features!
                        </p>
                        <button className="hidden" id='login'>Sign in</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello User!</h1>
                        <p>Register into our page to use a all of 
                            the functionalities!
                        </p>
                        <button className="hidden" id='login'>Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login