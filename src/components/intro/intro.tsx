import React from 'react';
import { Button } from '@mui/material';
import { BASE_URL } from './../';

import './intro.scss';

export const IntroComponent = () => {
  return (
    <section className="intro" style={{  
      backgroundImage: `url("${BASE_URL}/assets/images/join-iwi-background-img.png")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <img className="intro__logo" src={`${BASE_URL}/assets/images/iwi-logo-white.svg`} alt="iwi white logo" />
            <h1 className="intro__title">Join iwi<span className="intro__registered-trademark">&reg;</span></h1>
            <h2 className="intro__subtitle">App that uses <span className="intro__subtitle--highlighted">modern psychology</span> to help you build relationships with people you will easily click with.</h2>
            {/* <Button variant="contained" className="intro__button">Join</Button> */}
            <p className="intro__available-soon">Available soon on Google Play and App Store</p>
          </div>
        </div>
      </div>
    </section>
  );
}
