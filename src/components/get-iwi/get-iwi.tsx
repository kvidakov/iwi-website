import React from 'react';
import { BASE_URL } from '..';

import './get-iwi.scss';

export const GetIwiComponent = () => {
  return (
    <section className="get-iwi">
      <div className="container">
        <div className="row">
          <div className="col">
            <img className="get-iwi__gif" src={`${BASE_URL}/assets/images/get-iwi-mobile-app.gif`} alt="get iwi application" />
          </div>
          <div className="col col--justify-center">
            <div className="get-iwi__title-and-text">
              <div className="get-iwi__title-wrapper">
                <h2 className="get-iwi__title">Get <span className="get-iwi__title--highlighted">closer</span>, get <span className="get-iwi__title--highlighted">IWI</span></h2>
              </div>
              <p className="get-iwi__text">Socialize more, match, date, make friends, make connections, build realtionships, <span className="get-iwi__text--highlighted">get from I to We.</span></p>
            </div>
            <div className="get-iwi__app-store-images">
              <a href="https://apps.apple.com/hr/app/iwi/id1594025785" target="_blank" rel="noopener noreferrer" className="app-store-link">
                <img src={`${BASE_URL}/assets/images/app-stores/app-store.svg`} alt="iwi app store" className="app-store-img --ios" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.iwi" target="_blank" rel="noopener noreferrer" className="app-store-link">
                <img src={`${BASE_URL}/assets/images/app-stores/google-store.svg`} alt="iwi google play" className="app-store-img --android" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
