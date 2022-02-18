import React from 'react';
import { BASE_URL } from '..';

import './about.scss';

export const AboutComponent = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="about__title-img-wrapper">
              <img className="about__img" src={`${BASE_URL}/assets/images/about-personality-img.png`} alt="iwi woman thinking about personality" />
              <h2 className="about__title">It’s all about <span className="about__title--highlighted">personality</span></h2>
            </div>
            <p className="about__text">IWI matches people based on their personality types. Users are profiled by filling in a fun
            <span className="about__text--highlighted"> Big Five psychological questionnaire</span> — the only test unanimously accepted by the scientific community.
            </p>
            <img className="about__big-five-logo" src={`${BASE_URL}/assets/images/big-five-logo-white.svg`} alt="iwi big five logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
