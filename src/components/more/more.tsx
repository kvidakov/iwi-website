import React from 'react';
import { BASE_URL } from '..';

import './more.scss';

export const MoreComponent = () => {
  return (
    <section className="more">
      <div className="container">
        <div className="row">
          <div className="col align-items-end">
            <img className="more__img" src={`${BASE_URL}/assets/images/iwi-more-authentic.png`} alt="iwi more authentic girl" />
          </div>
          <div className="col align-items-start">
            <div className="more__title-and-text">
              <div className="more__title-wrapper">
                <h2 className="more__title">More <span className="more__title--highlighted">authentic</span></h2>
              </div>
              <p className="more__text">iwi® matches <span className="more__text--highlighted">real characters</span> instead of idealized online profiles.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="more__title-and-text">
              <div className="more__title-wrapper">
                <h2 className="more__title more__title--justify-start">More <span className="more__title--highlighted">successful</span></h2>
              </div>
              <p className="more__text more__text--no-padding-left">iwi’s® psychology-based matching algorithm <span className="more__text--highlighted">increases the success rate</span> of live meet ups.</p>
            </div>
          </div>
          <div className="col">
            <img className="more__img" src={`${BASE_URL}/assets/images/iwi-more-successful.png`} alt="iwi more successful girl and boy" />
          </div>
        </div>
        <div className="row">
          <div className="col align-items-end">
            <img className="more__img" src={`${BASE_URL}/assets/images/iwi-more-safe.png`} alt="iwi more safe handshake" />
          </div>
          <div className="col align-items-start">
            <div className="more__title-and-text">
              <div className="more__title-wrapper">
                <h2 className="more__title more__title--justify-start">More <span className="more__title--highlighted">safe</span></h2>
              </div>
              <p className="more__text">By connecting with highly compatible people, it feels a lot safer to transition <span className="more__text--highlighted">to a meeting in real life.</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
