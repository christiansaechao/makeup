import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import LandingPage from './components/landing-page';
import Login from './components/login';
import PhotoUpload from './components/photo-upload';

const App = () => {
    const [backendData, setBackendData] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    // proxy set up so we don't have to write http://localhost:8181 in package.json
    const url = "/users/user";

    const getUsers = async () => {
        try {
            const { data } = await axios.get(url);
            if (!data){
                setErrorMessage("No data found");
            } else {
                setBackendData(data); 
            }
        } 
        catch (err) {
            throw new Error(err);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    const loadingComponent = () => {
        return <div>Loading... {errorMessage}</div>
    }

    return (
        <div className="app-container m-auto">
            {/* {backendData !== null ? 
            <>
            Welcome: {backendData?.map((user) => {
                return <span key={user.id} className="text-3xl font-bold underline">{user.firstName} {user.lastName}</span>
            })}
            </> : loadingComponent()
            } */}
            <LandingPage />
            <Login />
            <PhotoUpload />
        </div>
    )
}

export default App;