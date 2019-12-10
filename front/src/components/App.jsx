import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import SliderContainer from './Slider/Slider.Container';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { GlobalStyle } from 'utils/styled_global/global';
import CarouselContainer from './Carousel/Carousel.container';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.sass';

const App = () =>
  <Router>
    <>
      <GlobalStyle />
      <Header />
      <Route exact component={SliderContainer} path="/" />
      <Route exact component={CarouselContainer} path="/" />
      <Main />
      <Footer />
    </>;
  </Router>

export default App;