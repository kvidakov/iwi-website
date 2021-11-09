import { Link } from '@mui/material';
import React from 'react';
import { BASE_URL } from '..';
import { SocialMediaIconsComponent } from './..';

import './footer.scss';

export const FooterComponent = ({ isPrivacyPage }: any = false) => {
  return (
    <section className={`footer ${isPrivacyPage ? 'footer--dark' : ''}`}>
      <div className="container">
        <div className="footer__content">
          <img className="footer__logo" src={`${BASE_URL}/assets/images/iwi-logo-white.svg`} alt="iwi white logo" />
          <h2 className="footer__title">Join <span className="footer__title--highlighted">iwi® community</span></h2>
          <SocialMediaIconsComponent></SocialMediaIconsComponent>
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
            <Link className="footer__bottom-link" href="/privacy-policy">
              Privacy Policy
            </Link>
          </div>
          <p className="footer___trademark">© 2021 iwi App, All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
}