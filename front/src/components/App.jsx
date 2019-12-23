import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// * Components
import SliderContainer from './Slider/Slider.Container';
import {
  HeaderContainer,
  CarouselContainer,
  Main,
  Footer
} from 'components/index';

// * Sass
import './App.sass';

const App = () =>
  <Router>
    <>
      <HeaderContainer />
      <Route exact component={SliderContainer} path="/" />
      <Route exact component={CarouselContainer} path="/" />
      <Main />
      <Footer />
    </>
  </Router>

export default App;