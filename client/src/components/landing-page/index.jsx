import React, { useState, useEffect } from 'react';
import landingPage from '../../images/landing_page.png';
import landingPage2 from '../../images/landing_page_2.png';
import arrow from '../../images/arrow.png';
import './styles.css';

const LandingPage = () => {
  return (
    <div className="home-container flex justify-center align-center flex-col gap-y-4 m-auto px-10 py-20">
        <img src={landingPage2} className="landing-page-img" alt="landing page" />
        <h1 className="text-4xl text-center">MakeupMatch</h1>
        <h3 className="text-xl text-center">Find Your Match</h3>
        <div className="arrow-container btn m-auto">
            <img src={arrow} alt="arrow" />
        </div>
    </div>
  )
}

export default LandingPage;