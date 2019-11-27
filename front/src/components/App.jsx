import React from 'react';
import './App.sass';
import Header from './Header/Header';
import SliderContainer from './Slider/Slider.Container';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { GlobalStyle } from 'utils/styles/global';

const App = () => <>
  <GlobalStyle />
  <Header />
  <SliderContainer />
  <Main />
  <Footer />
</>;

export default App;