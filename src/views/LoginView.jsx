import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../components/Login'
import Register from '../components/Registration'
import './LoginView.css'

function LoginView() {

    return (
        <div className='App'>
            <Header />
            <Login />
            <Register />
            <Footer />
        </div>
    )
}

export default LoginView;