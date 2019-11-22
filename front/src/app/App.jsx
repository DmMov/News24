import React from 'react';
import './App.sass';
import SiteHeader from './site-header/SiteHeader';
import SiteSliderContainer from './site-slider/SiteSlider.Container';
import SiteFooter from './site-footer/SiteFooter';

const App = () => <>
  <SiteHeader />
  <SiteSliderContainer />
  <SiteFooter />
</>;

export default App;