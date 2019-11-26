import React from 'react';
import ASBox from 'components/common/ASBox/ASBox';
import SlideIndexBoxContainer from './SlideIndexBox/SlideIndexBox.Container';
import SlideInfoContainer from './SlideInfo/SlideInfo.Container';

import './Slide.sass';

const Slide = ({ slide, index }) =>
  <div className="slide">
    <img src={slide.img} className="slide-img" />
    <ASBox>
      <div className="slide-inf-wrap">
        <SlideIndexBoxContainer index={index} />
        <SlideInfoContainer slide={slide} />
      </div>
    </ASBox>
  </div>


export default Slide;