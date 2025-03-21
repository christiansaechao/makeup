import React, { useState } from 'react';

import SignupFrom from './signup-form';
import LoginForm from './login-form';
import LoginPageImage from '../../images/login_page.png';
import './styles.css';

const fakeUser = {
    firstName: "bill",
    lastName: "nye",
    email: "billnye@gmail.com",
    password: "password"
}

const LoginPage = ({ setPageStep, pageStep }) => {
    const [showLogin, setShowLogin] = useState(true);

    const handleUserInformation = () => {

    }

    const handleUserLogin = () => {

    }

    return (
        <div className="login-container flex justify-center align-center flex-col">
            <h1 className="text-center text-3xl mb-2">Sign In or Create An Account</h1>
            <h3 className="text-sm text-center">UNLOCK YOUR PERFECT LOOK</h3>
            <img src={LoginPageImage} className="w-60 m-auto" alt="login page" />
            {showLogin ? 
                <LoginForm handleUserLogin={handleUserLogin} fakeUser={fakeUser} showLogin={showLogin} setShowLogin={setShowLogin} /> 
                : 
                <SignupFrom setShowLogin={setShowLogin} showLogin={showLogin} setPageStep={setPageStep} pageStep={pageStep} />
            }
        </div>
    )
}

export default LoginPage;