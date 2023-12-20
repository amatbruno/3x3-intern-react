import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../components/Login'
import Register from '../components/Registration'

function LoginView() {

    return (
        <div>
            <Header />
            <Login />
            <Register />
            <Footer />
        </div>
    )
}

export default LoginView;