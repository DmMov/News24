import React from 'react';
import ASBox from 'app/common/as-box/ASBox';
import SlideIndexBoxContainer from './slide-index-box/SlideIndexBox.Container';
import SlideInfoContainer from './slide-info/SlideInfo.Container';

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