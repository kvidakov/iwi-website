import React from 'react';
import { FooterComponent, NavigationComponent, PrivacyPolicyContentComponent } from '../../components';

import './privacy-policy.scss';

export default () => {
  return (
    <>
      <div className="privacy-policy">
        <NavigationComponent isPrivacyPage={true} />
        <PrivacyPolicyContentComponent />
      </div>
      <FooterComponent />
    </>
  );
};