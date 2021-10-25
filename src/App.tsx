import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { MoreComponent, AboutComponent, IntroComponent, NavigationComponent, GetIwiComponent, FooterComponent } from './components';

function App() {
  return (
    <div className="App">
      {/* <NavigationComponent></NavigationComponent> */}
      <IntroComponent></IntroComponent>
      <AboutComponent></AboutComponent>
      <MoreComponent></MoreComponent>
      <GetIwiComponent></GetIwiComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
