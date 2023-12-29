import React, { useState } from 'react'
import './Login.css'
import axios from 'axios';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/login', { email, password });
            console.log('Este usuario existe');
        } catch (error) {
            console.error('Error al encontrar usuario', error);
        }
    };

    return (
        <div className="sign-in-container">
            <form>
                <h1>LOGIN</h1>
                <span>Enter your email and password to access your services</span>
                <input type="text" placeholder='Introduce your email' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Introduce your password' onChange={(e) => setPassword(e.target.value)} />
                <button type='button' onClick={handleLogin}>Sign In</button>
            </form>
        </div>
    )
}

export default Login