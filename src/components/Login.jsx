import React, { useState } from 'react'
import './Login.css'
import axios from 'axios';
import { FaGoogle, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:3001/register', { username, password });
            console.log('Usuario registrado exitosamente');
        } catch (error) {
            console.error('Error al registrar usuario', error);
        }
    };

    return (
        <div className="container">
            <div className="form-container sign-up">
                <form>
                    <h1>LOGIN</h1>
                    <span>Enter your email and password to access your services</span>
                    <input type="name" placeholder='Introduce your name' />
                    <input type="text" placeholder='Introduce your email' />
                    <input type="password" placeholder='Introduce your password' />
                    <input type="password" placeholder='Confirm your password' />
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Login