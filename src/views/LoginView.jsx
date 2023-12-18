import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import COVER_IMAGE from '../assets/cover_img.jpg'

function LoginView() {

    const colors = {
        primary: "#060606",
        background: "#E0E0E0",
        disabled: "#D9D9D9"
    }

    return (
        <div>
            <Header />
            <div className='relative w-full h-screen flex items-start'>
                <div className="relative w-1/2 h-full flex flex-col">
                    <div className="absolute top-1/4 left-1/10 text-white">
                        <h1 className='text-4xl text-white font-bold my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                    </div>

                    <img src={COVER_IMAGE} className='w-full h-full object-cover' alt="login_cover_img" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LoginView;