import React from 'react';
import { BASE_URL } from '..';

import './social-media-icons.scss';

export const SocialMediaIconsComponent = ({ isInFooter }: any = true) => {
  return (
    <div className="social-icons">
      <a className="social-icons__icon --facebook" href="https://www.facebook.com/Iwi-app-102682361658983" target="_blank" rel="noopener noreferrer">
        <img src={`${BASE_URL}/assets/icons/facebook-logo.svg`} alt="facebook logo" />
      </a>
      <a className="social-icons__icon --instagram" href="https://www.instagram.com/iwiapp/" target="_blank" rel="noopener noreferrer">
        <img src={`${BASE_URL}/assets/icons/instagram-logo.svg`} alt="instagram logo" />
      </a>
      {!!isInFooter && (
        <>
          <a className="social-icons__icon --twitter" href="https://www.twitter.com/iwiapp/" target="_blank" rel="noopener noreferrer">
            <img src={`${BASE_URL}/assets/icons/twitter-logo.svg`} alt="twitter logo" />
          </a>
          <a className="social-icons__icon --linkedin" href="https://www.linkedin.com/company/iwiapp/" target="_blank" rel="noopener noreferrer">
            <img src={`${BASE_URL}/assets/icons/linkedin-logo.svg`} alt="linkedin logo" />
          </a>
          <a className="social-icons__icon --telegram" href="https://t.me/iwicommunity/" target="_blank" rel="noopener noreferrer">
            <img src={`${BASE_URL}/assets/icons/telegram-logo.svg`} alt="telegram logo" />
          </a>
        </>
      )}
      {/* <a className="social-icons__icon --youtube" href="#" target="_blank" rel="noopener noreferrer">
        <img src={`${BASE_URL}/assets/icons/youtube-logo.svg`} alt="youtube logo" />
      </a> */}
    </div>
  );
};
