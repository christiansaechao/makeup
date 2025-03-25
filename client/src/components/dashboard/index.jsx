import React, { useState, useEffect } from 'react';
import { useUserStorePersisted, useImageStorePersisted } from '../../store/userStore';
import { skinTones, eyeColors, lipColors, colorMatch } from './skinData';
import Recommendations from './recommendations';
import './styles.css';

const Dashboard = () => {
    const { firstName, lastName, setUser, skinTone, eyeColor, lipColor } = useUserStorePersisted();
    const { imageData } = useImageStorePersisted();

    const findUserColors = () => {
        const eyesData = imageData[0].eye;
        const lipsData = imageData[1].lips; 
        const skinData = imageData[2].skin;

        setUser({ skinTone: colorMatch(skinData, skinTones), eyeColor: colorMatch(eyesData, eyeColors), lipColor: colorMatch(lipsData, lipColors) });
    }

    useEffect(() => {
        if (!skinTone || !eyeColor || !lipColor) {
            findUserColors();
        }
    }, []);

    return (
        <div>
            <h1>{firstName}, {lastName} Your Complexion Analysis:
                skin: {skinTone[0]}, eye: {eyeColor[0]}, lip: {lipColor[0]}
            </h1>
            <p>
                Based on your uploaded image, 
                we recommend these shades that complement your complexion.
            </p>
            <Recommendations time='day' />
            <Recommendations time='night' />
        </div>
    )
}

export default Dashboard;