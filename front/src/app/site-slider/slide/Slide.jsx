import React from 'react';
import AlignSectionBox from 'app/align-section-box/AlignSectionBox';

import './Slide.sass';

const Slide = ({ img }) =>
  <div className="slide">
    <img src={img} className="slide-img" />
    <AlignSectionBox>
    </AlignSectionBox>
  </div>


export default Slide;