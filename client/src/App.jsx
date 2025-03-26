import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useMakeupStore } from './store/makeupStore';

import './App.css';
import LandingPage from './components/landing-page';
import Login from './components/login';
import PhotoUpload from './components/photo-upload';
import Dashboard from './components/dashboard';

const App = () => {
    const { setMakeup } = useMakeupStore();
    const [pageStep, setPageStep] = useState(0);

    const pages = {
        0: <LandingPage setPageStep={setPageStep} pageStep={pageStep} />,
        1: <Login setPageStep={setPageStep} pageStep={pageStep} />,
        2: <PhotoUpload setPageStep={setPageStep} pageStep={pageStep} />,
        3: <Dashboard />
    };

    const getMakeup = async () => {
        const lipStickReq = axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick');
        const eyeShadowReq = axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow');
        const blushReq = axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush');

        try {
            const responses = await Promise.all([lipStickReq, eyeShadowReq, blushReq]);
            setMakeup({ lipSticks: responses[0]?.data, eyeShadows: responses[1]?.data, blushes: responses[2]?.data });
        } catch (err) {
            throw new Error(err);
        }
    }

    useEffect(() => {
        getMakeup();
    }, []);

    return (
        <div className="app-container m-auto overflow-y-auto overflow-hidden" >
            {pages[pageStep]}
        </div>
    )
}

export default App;