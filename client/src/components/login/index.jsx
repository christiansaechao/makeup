import React from 'react';
import LoginPageImage from '../../images/login_page.png';
import './styles.css';

const LoginPage = () => {

    const handleButtonClick = () => {
        alert('Login button clicked');
    }

    return (
        <div className="login-container flex justify-center align-center flex-col">
            <h1 className="text-center text-3xl mb-2">Sign In or Create An Account</h1>
            <h3 className="text-sm text-center">UNLOCK YOUR PERFECT LOOK</h3>
            <img src={LoginPageImage} alt="login page" />
            <div className="input-container flex justify-cnter align-center flex-col gap-5 px-5">
                <input type='text' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <div className="button-container flex justify-center align-center gap-5">
                    <input type='button' value='Login' className="btn" onClick={handleButtonClick}/>
                    <input type='button' value='Sign Up' className="btn" />
                </div>
            </div>
        </div>
    )
}

export default LoginPage;