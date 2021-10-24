import React from 'react';
import { BASE_URL } from '..';

import './get-iwi.scss';

export const GetIwiComponent = () => {
  return (
    <section className="get-iwi">
      <div className="container">
        <div className="row get-iwi__row">
          <div className="col">
            <img className="get-iwi__img" src={`${BASE_URL}/assets/images/get-iwi-mobile-app.png`} alt="get iwi application" />
          </div>
          <div className="col col--justify-center">
            <div className="get-iwi__title-and-text">
              <div className="get-iwi__title-wrapper">
                <h2 className="get-iwi__title">Get <span className="get-iwi__title--highlighted">closer</span>, get <span className="get-iwi__title--highlighted">iwi®</span></h2>
              </div>
              <p className="get-iwi__text">Socialize more, match, date, make friends, make connections, build realtionships, <span className="get-iwi__text--highlighted">get from I to We.</span></p>
            </div>
            <div className="get-iwi__app-store-images">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={`${BASE_URL}/assets/images/iwi-app-store.png`} alt="iwi app store image" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={`${BASE_URL}/assets/images/iwi-google-store.png`} alt="iwi google store image" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
