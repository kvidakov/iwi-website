import React from 'react';
import { BASE_URL } from '..';

import './more.scss';

export const MoreComponent = () => {
  return (
    <section className="more">
      <div className="more__row">
        <div className="more__col">
          <img className="more__img" src={`${BASE_URL}/assets/images/iwi-more-authentic.png`} alt="iwi more authentic girl" />
        </div>
        <div className="more__col">
          <div className="more__title-and-text">
            <h2 className="more__title">More <span className="more__title--highlighted">authentic</span></h2>
            <p className="more__text">iwi® matches <span className="more__text--highlighted">real characters</span><br />instead of idealized online profiles</p>
          </div>
        </div>
      </div>
    </section>
  );
}
