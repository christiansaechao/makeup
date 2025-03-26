import React from 'react';
import { useUserStorePersisted } from '../../store/userStore';
import Recommendations from './recommendations';
import './styles.css';

const Dashboard = () => {
    const { firstName, skinTone, eyeColor, lipColor, img, eyeShadows, blushes, lipSticks } = useUserStorePersisted();

    return (
        <div className={"dashboard-container flex justify-center align-center flex-col gap-5 p-2 overflow-y-auto overflow-hidden"}>
            <h1 className={'text-2xl text-transform capitalize'}>{firstName} Your Complexion Analysis: </h1>
            <img src={img} className="m-auto w-1/2" alt="uploaded user" />
            <ul className={'text-transform capitalize'}>
                <li>Skin Tone: {skinTone[0]}</li>
                <li>Eye Color: {eyeColor[0]}</li>
                <li>Lip Color: {lipColor[0]}</li>
            </ul>
            <p>
                Based on your uploaded image, 
                we recommend these shades that complement your complexion.
            </p>
            <Recommendations eyeShadowsProd={eyeShadows} blushesProd={blushes} lipSticksProd={lipSticks}/>
        </div>
    )
}

export default Dashboard;