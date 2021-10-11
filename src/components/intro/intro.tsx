import React from 'react';
import { Button } from '@mui/material';
import { BASE_URL } from './../';

import './intro.scss';

export const IntroComponent = () => {
  return (
    <section className="intro" style={{  
      backgroundImage: "url(" + BASE_URL + '/assets/images/join-iwi-background-img.png' + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <img className="intro__logo" src={`${BASE_URL}/assets/images/iwi-logo-white.svg`} />
      <h1 className="intro__title">Join iwi<span className="intro__registered-trademark">&reg;</span></h1>
      <h2 className="intro__subtitle">The app that utilizes modern psychology<br/><span className="intro__subtitle--highlighted">to help you build relationships with people<br/>you will easily connect to.</span></h2>
      <Button variant="contained" className="intro__button">Join</Button>
    </section>
  );
}
