import { Link } from '@mui/material';
import React from 'react';

import './navigation.scss';

export const NavigationComponent = () => {
  return (
    <nav className="navigation">
      <div className="navigation__links-wrapper">
        <Link className="navigation__link" href="/about">About</Link>
        <Link className="navigation__link" href="/product">Product</Link>
        <Link className="navigation__link" href="/support">Support</Link>
        <Link className="navigation__link" href="/contact">Contact</Link>
        <span className="navigation__buttons">
          <Link className="navigation__link" href="/sign-in">Sign in</Link>
          <Link className="navigation__link" href="/english">English</Link>
        </span>
      </div>
    </nav>
  );
}
