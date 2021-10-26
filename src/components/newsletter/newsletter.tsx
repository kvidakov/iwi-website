import React from 'react';
import { NewsletterFormComponent } from './newsletter-form';
import { BASE_URL } from '..';

import './newsletter.scss';

export const NewsletterComponent = () => {

  return (
    <section className="newsletter" style={{  
      backgroundImage: `url("${BASE_URL}/assets/images/iwi-newsletter-background-img.png")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="container">
        <div className="row">
          <div className="col col--justify-center align-items-center">
            <h2 className="newsletter__title"><span className="newsletter__title--highlighted">Sign up</span> for early access, promotions & more</h2>
            <NewsletterFormComponent></NewsletterFormComponent>
            <p className="newsletter__consent">By subscribing you agree to receive iwi newsletters via e-mail. For further information, please consult the Privacy Policy.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
