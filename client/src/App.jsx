import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import LandingPage from './components/landing-page';
import Login from './components/login';
import PhotoUpload from './components/photo-upload';
import Dashboard from './components/dashboard';

const App = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [pageStep, setPageStep] = useState(2);
    const pages = {
        0: <LandingPage setPageStep={setPageStep} pageStep={pageStep} />,
        1: <Login setPageStep={setPageStep} pageStep={pageStep} />,
        2: <PhotoUpload setPageStep={setPageStep} pageStep={pageStep} />,
        3: <Dashboard />
    };

    const loadingComponent = () => {
        return <div>Loading... {errorMessage}</div>
    }

    return (
        <div className="app-container m-auto" >
            {/* {backendData !== null ? 
            <>
            Welcome: {backendData?.map((user) => {
                return <span key={user.id} className="text-3xl font-bold underline">{user.firstName} {user.lastName}</span>
            })}
            </> : loadingComponent()
            } test */}
            {pages[pageStep]}
        </div>
    )
}

export default App;