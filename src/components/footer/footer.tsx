import React from 'react';
import { Link } from '@mui/material';
import { BASE_URL } from '..';
import { SocialMediaIconsComponent } from './..';

import './footer.scss';

export const FooterComponent = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer__content">
          <img className="footer__logo" src={`${BASE_URL}/assets/images/iwi-logo-white.svg`} alt="iwi white logo" />
          <h2 className="footer__title">Join <span className="footer__title--highlighted">IWI community</span></h2>
          <SocialMediaIconsComponent isInFooter={true}></SocialMediaIconsComponent>
        </div>
        <div className="row footer__bottom-row">
          <div className="footer__links">
            {/*
            <Link className="footer__bottom-link" href="#" target="_blank" rel="noopener noreferrer">
              Contact
            </Link>
            <Link className="footer__bottom-link" href="#" target="_blank" rel="noopener noreferrer">
              FAQ
            </Link>
            <Link className="footer__bottom-link" href="#" target="_blank" rel="noopener noreferrer">
              Terms
            </Link>
            <Link className="footer__bottom-link" href="#" target="_blank" rel="noopener noreferrer">
              Cookie Policy
            </Link> 
            */}
            <Link className="footer__bottom-link" href="mailto:info@iwi-app.com">
              Contact
            </Link>
            <Link className="footer__bottom-link" href="/privacy-policy">
              Privacy Policy
            </Link>
          </div>
          <p className="footer___trademark">© 2022 IWI App, All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
}