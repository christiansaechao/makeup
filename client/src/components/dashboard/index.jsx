import React from 'react';
import { useUserStorePersisted } from '../../store/userStore';
import Recommendations from './reommendations';
import './styles.css';

const Dashboard = () => {
    const { firstName, lastName } = useUserStorePersisted();

    return (
        <div>
            <h1>{firstName} Your Complexion Analysis</h1>
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