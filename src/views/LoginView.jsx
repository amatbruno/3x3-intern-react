import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../components/Login'
import COVER_IMAGE from '../assets/cover_img.jpg'

function LoginView() {

    return (
        <div>
            <Header />
            <Login />
            <Footer />
        </div>
    )
}

export default LoginView;