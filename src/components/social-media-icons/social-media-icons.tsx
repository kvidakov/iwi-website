import React from 'react';
import { BASE_URL } from '..';

import './social-media-icons.scss';

export const SocialMediaIconsComponent = () => {
  return (
    <div className="social-icons">
      <a className="social-icons__icon social-icons__icon-facebook" href="https://www.facebook.com/Iwi-app-102682361658983" target="_blank" rel="noopener noreferrer">
        <img src={`${BASE_URL}/assets/images/facebook-logo.svg`} alt="facebook logo" />
      </a>
      <a className="social-icons__icon social-icons__icon-instagram" href="https://www.instagram.com/iwiapp/" target="_blank" rel="noopener noreferrer">
        <img src={`${BASE_URL}/assets/images/instagram-logo.svg`} alt="instagram logo" />
      </a>
      {/* <a className="social-icons__icon social-icons__icon-youtube" href="#" target="_blank" rel="noopener noreferrer">
        <img src={`${BASE_URL}/assets/images/youtube-logo.svg`} alt="youtube logo" />
      </a> */}
    </div>
  );
};
