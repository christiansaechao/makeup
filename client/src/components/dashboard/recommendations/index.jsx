import React, { useEffect, useState } from 'react';
import Product from './product';
import './styles.css';

const Recommendations = ({ eyeShadowsProd, blushesProd, lipSticksProd }) => {
    const [eyeShadows, setEyeShadows] = useState(null),
        [blushes, setBlushes] = useState(null),
        [lipSticks, setLipSticks] = useState(null);

    const shortenRecommendations = () => {
        setEyeShadows(eyeShadowsProd.slice(0, 5));
        setBlushes(blushesProd.slice(0, 5));
        setLipSticks(lipSticksProd.slice(0, 5));
    };

    useEffect(() => {
        shortenRecommendations();
    }, []); 

    return (
        <div>
            <div className={'mb-10'}>
                <h1 className={'text-3xl mb-5'}>Eye Shadows</h1>
                <div className="products-container flex justify-center align-center flex-col gap-4">
                    {eyeShadows?.map((eyeShadow, index) => <Product key={index} product={eyeShadow} />)}
                </div>
            </div>
            <div className={'mb-10'}>
                <h1 className={'text-3xl mb-5'}>Blushes</h1>
                <div className="products-container flex justify-center align-center flex-col gap-4">
                    {blushes?.map((blush, index) => <Product key={index} product={blush} />)}
                </div>
            </div>
            <div className={'mb-10'}>
                <h1 className={'text-3xl mb-5'}>Lipsticks</h1>
                <div className="products-container flex justify-center align-center flex-col gap-4">
                    {lipSticks?.map((lipstick, index) => <Product key={index} product={lipstick} />)}
                </div>
            </div>
        </div>
    )
}

export default Recommendations;