import { Button, Link } from '@mui/material';
import React from 'react';
import { BASE_URL, SocialMediaIconsComponent } from './..';

import './navigation.scss';

export const NavigationComponent = ({ isPrivacyPage }: any = false) => {
  return (
    <nav className="navigation">
      <div className="navigation__links-wrapper">
        {/* <Link className="navigation__link" href="/about">About</Link>
        <Link className="navigation__link" href="/product">Product</Link>
        <Link className="navigation__link" href="/support">Support</Link>
        <Link className="navigation__link" href="/contact">Contact</Link> */}
        {!isPrivacyPage && (
          <span className="navigation__buttons">
            {/* <Link className="navigation__link" href="/sign-in">Sign in</Link>
            <Link className="navigation__link" href="/english">English</Link> */}
              <SocialMediaIconsComponent />
          </span>
        )}
        {isPrivacyPage && (
          <span className="navigation__back-to-homepage-wrapper">
            {/* <Link className="navigation__link" href="/sign-in">Sign in</Link>
            <Link className="navigation__link" href="/english">English</Link> */}
            <Link href="/">
              <img className="navigation__back-to-homepage" src={`${BASE_URL}/assets/images/back-to-homepage.svg`} alt="back to homepage" />
            </Link>
          </span>
        )}
      </div>
    </nav>
  );
}
