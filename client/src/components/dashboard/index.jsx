import React from 'react';
import { useUserStorePersisted } from '../../store/userStore';
import Recommendations from './recommendations';
import './styles.css';

const Dashboard = () => {
    const { firstName, skinTone, eyeColor, lipColor, img, eyeShadows, blushes, lipSticks } = useUserStorePersisted();

    return (
        <div className={"dashboard-container flex justify-center align-center flex-col gap-5 overflow-y-auto overflow-hidden"}>
            <div className="user-container flex justify-center align-center flex-col gap-2 p-2">
                <img src={img} className="m-auto" alt="uploaded user" />
                <h1 className={'text-3xl text-transform capitalize text-center'}>Welcome, {firstName}!</h1>
                <ul className={'characteristics-container text-transform capitalize'}>
                    <li>Skin Tone <br />{skinTone[0]}</li>
                    <li>Eye Color <br />{eyeColor[0]}</li>
                    <li>Lip Color <br />{lipColor[0].split('_').join(' ')}</li>
                </ul>
            </div>
            <div className="p-5">
                <p className="mt-3">
                    Based on your uploaded image, 
                    we recommend these shades that complement your complexion.
                </p>
                <Recommendations eyeShadowsProd={eyeShadows} blushesProd={blushes} lipSticksProd={lipSticks}/>
            </div>
        </div>
    )
}

export default Dashboard;