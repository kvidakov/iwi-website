import React from 'react';
import { MoreComponent, AboutComponent, IntroComponent, NavigationComponent, GetIwiComponent, FooterComponent, NewsletterComponent } from './../components';

export default () => {
  return (
    <>
      <NavigationComponent></NavigationComponent>
      <IntroComponent></IntroComponent>
      <AboutComponent></AboutComponent>
      <MoreComponent></MoreComponent>
      <GetIwiComponent></GetIwiComponent>
      <NewsletterComponent></NewsletterComponent>
      <FooterComponent />
    </>
  );
};
