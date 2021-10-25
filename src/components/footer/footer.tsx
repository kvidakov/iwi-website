import { Link } from '@mui/material';
import React from 'react';
import { BASE_URL } from '..';

import './footer.scss';

export const FooterComponent = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <img className="footer__logo" src={`${BASE_URL}/assets/images/iwi-logo-white.svg`} alt="iwi white logo" />
          <h2 className="footer__title">Join <span className="footer__title--highlighted">iwi® community</span></h2>
          <div className="footer__social-icons">
            <a className="footer__social-icon footer__social-icon-facebook" href="https://www.facebook.com/Iwi-app-102682361658983" target="_blank" rel="noopener noreferrer">
              <img src={`${BASE_URL}/assets/images/facebook-logo.svg`} alt="facebook logo" />
            </a>
            <a className="footer__social-icon footer__social-icon-instagram" href="https://www.instagram.com/iwiapp/" target="_blank" rel="noopener noreferrer">
              <img src={`${BASE_URL}/assets/images/instagram-logo.svg`} alt="instagram logo" />
            </a>
            <a className="footer__social-icon footer__social-icon-youtube" href="#" target="_blank" rel="noopener noreferrer">
              <img src={`${BASE_URL}/assets/images/youtube-logo.svg`} alt="youtube logo" />
            </a>
          </div>
        </div>
        <div className="row footer__bottom-row">
          {/* <Link className="footer__bottom-link" href="#" target="_blank" rel="noopener noreferrer">
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
          <Link className="footer__bottom-link" href="#" target="_blank" rel="noopener noreferrer">
            Privacy Settings
          </Link> */}
          <p className="footer___trademark">© 2021 iwi App, All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
}