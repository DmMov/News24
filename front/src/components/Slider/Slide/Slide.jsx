import React from 'react';
import SlideIndexBoxContainer from './SlideIndexBox/SlideIndexBox.Container';
import SlideInfoContainer from './SlideInfo/SlideInfo.Container';

import './Slide.sass';

const Slide = ({ slide, index }) =>
  <div className="slide">
    <div className="img-wrap abs-stretch">
      <img src={slide.img} className="slide-img" />
    </div>
    <div className="slide-inf-wrap">
      <SlideIndexBoxContainer index={index} />
      <SlideInfoContainer slide={slide} />
    </div>
  </div>


export default Slide;