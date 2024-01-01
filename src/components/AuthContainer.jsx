import React, { useState } from 'react';
import Login from './Login';
import Registration from './Registration';
import Header from './Header';

const AuthContainer = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);

    return (
        <div>
            <Header />
            {isLoginMode ? <Login /> : <Registration />}
            <p>
                {isLoginMode ? "Don't have an account? " : "Already have an account? "}
                <a href="#" onClick={() => setIsLoginMode(!isLoginMode)} style={{textAlign: 'center'}}>
                    {isLoginMode ? 'Register here' : 'Login here'}
                </a>
            </p>
        </div>
    );
};

export default AuthContainer;
