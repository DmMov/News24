import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// * Components
import HeaderContainer from './Header/Header.container';
import SliderContainer from './Slider/Slider.Container';
import Main from './Main/Main';
import {
  CarouselContainer,
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