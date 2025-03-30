import React, { useState } from 'react';
import { useUserStorePersisted } from '../../../store/userStore';
import './styles.css';

const SignupForm = ({ setShowLogin, showLogin, setPageStep, pageStep }) => {
    const { setUser } = useUserStorePersisted();

    const [password, setPassword] = useState(''),
        [firstName, setFirstName] = useState(''),
        [lastName, setLastName] = useState(''),
        [email, setEmail] = useState('');

    const [validPassword, setValidPassword] = useState(true),
        [passwordMatch, setPasswordMatch] = useState(true);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
        setValidPassword(passwordRegex.test(e.target.value));
    }

    const handlePasswordMatch = (e) => {
        const confirmPassword = e.target.value;
        setPasswordMatch(password === confirmPassword);
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        if (validPassword && passwordMatch && firstName && lastName && email) {
            setUser({firstName, lastName, email, password});
            setPageStep(pageStep + 1);
        }
    } 

    return (
        <div className="signup-container">
            <form onSubmit={handleSignUp}>
                <div className="inputs-container flex justify-center align-center flex-col">
                    <div className="field-container">
                        <label>First Name</label>
                        <input type='text' className="field" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} required />
                    </div>
                    <div className="field-container">
                        <label>Last Name</label>
                        <input type='text' className="field" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} required />
                    </div>
                    <div className="field-container">
                        <label>Email</label>
                        <input type='email' className="field" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="field-container">
                        <label>Password</label>
                        <input type='password' className="field" placeholder="Password" value={password} onChange={handlePasswordChange} required />
                    </div>
                    {!validPassword && 
                        <p className="error-message text-sm text-red-500">
                        Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.
                        </p>
                    }
                    {validPassword &&
                    <>
                        <div className="field-container">
                            <label>Confirm Password</label>
                            <input type='password' className="field" placeholder="Confirm Password" onChange={handlePasswordMatch} />
                        </div>
                        {!passwordMatch && 
                            <span className="error-message text-sm text-center text-red-500">
                                Passwords do not match.
                            </span>
                        }
                    </>
                    }
                </div>
                <div className="flex justify-center align-center m-4">
                    <button type="submit" className="signup-btn btn bg-blue-600">Sign Up</button>
                </div>
                <div className="flex justify-center align-center m-4">
                    <span className="text-center text-sm cursor-pointer text-blue-500 hover:underline" onClick={() => setShowLogin(!showLogin)}>Already have an account?</span>
                </div>
            </form>
        </div>
    )
}

export default SignupForm;