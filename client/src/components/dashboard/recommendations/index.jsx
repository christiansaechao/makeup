import React, { useEffect, useState } from 'react';
import Product from './product';
import './styles.css';

const Recommendations = ({ eyeShadowsProd, blushesProd, lipSticksProd }) => {

    const [eyeShadows, setEyeShadows] = useState(null),
        [blushes, setBlushes] = useState(null),
        [lipSticks, setLipSticks] = useState(null);

    const shortenRecommendations = () => {
        setEyeShadows(eyeShadowsProd.slice(0, 3));
        setBlushes(blushesProd.slice(0, 3));
        setLipSticks(lipSticksProd.slice(0, 3));
    }

    useEffect(() => {
        shortenRecommendations();
    }, [])

    return (
        <div>
            {console.log(eyeShadows)}
            <div className={'m-2'}>
                <h1 className={'text-3xl'}>Eye Shadows</h1>
                {eyeShadows?.map((eyeShadow, index) => <Product key={index} brand={eyeShadow.brand} image_link={eyeShadow.api_featured_image} product_link={eyeShadow.product_link}/>)}
            </div>
            <div className={'m-2'}>
                <h1 className={'text-3xl'}>Blushes</h1>
                {blushes?.map((blush, index) => <Product key={index} brand={blush.brand} image_link={blush.api_featured_image} product_link={blush.product_link}/>)}
            </div>
            <div className={'m-2'}>
                <h1 className={'text-3xl'}>Lipsticks</h1>
                {lipSticks?.map((lipstick, index) => <Product key={index} brand={lipstick.brand} image_link={lipstick.api_featured_image} product_link={lipstick.product_link} />)}
            </div>
        </div>
    )
}

export default Recommendations;