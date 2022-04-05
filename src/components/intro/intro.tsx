import React from 'react';
import { BASE_URL } from './../';

import './intro.scss';

export const IntroComponent = () => {
  return (
    <section className="intro" style={{  
      backgroundImage: `url("${BASE_URL}/assets/images/iwi-intro-background-img.jpg")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <img className="intro__logo" src={`${BASE_URL}/assets/images/iwi-logo-white.svg`} alt="iwi white logo" />
            <h1 className="intro__title">Join iwi</h1>
            <h2 className="intro__subtitle">IWI app uses <span className="intro__subtitle--highlighted">modern psychology</span> to help you build relationships with people you will easily click with.</h2>
            {/* <Button variant="contained" className="intro__button">Join</Button> */}
            <div className="intro__app-stores">
              <a href="https://apps.apple.com/hr/app/iwi/id1594025785" target="_blank" rel="noopener noreferrer" className="app-store-link --ios">
                <img src={`${BASE_URL}/assets/images/app-stores/app-store.svg`} alt="iwi app store" className="app-store-img --ios" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.iwi" target="_blank" rel="noopener noreferrer" className="app-store-link --android">
                <img src={`${BASE_URL}/assets/images/app-stores/google-store.svg`} alt="iwi google play" className="app-store-img --android" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
