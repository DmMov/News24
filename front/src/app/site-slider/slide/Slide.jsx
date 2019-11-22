import React from 'react';
import AlignSectionBox from 'app/align-section-box/AlignSectionBox';
import { Link as RouterLink } from 'react-router-dom';

import './Slide.sass';
import { FiberManualRecord, EqualizerRounded } from '@material-ui/icons';
import SlideIndexBoxContainer from './slide-index-box/SlideIndexBox.Container';
import SlideInfoContainer from './slide-info/SlideInfo.Container';

const Slide = ({ slide, index }) =>
  <div className="slide">
    <img src={slide.img} className="slide-img" />
    <AlignSectionBox>
      <div className="slide-inf-wrap">
        <SlideIndexBoxContainer index={index} />
        <SlideInfoContainer slide={slide} />
      </div>
    </AlignSectionBox>
  </div>


export default Slide;