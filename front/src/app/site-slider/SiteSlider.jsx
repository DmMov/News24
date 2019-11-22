import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Slide from './slide/Slide';

import './SiteSlider.sass';
import Dots from '../dots/Dots';

const SiteSlider = ({ slide, index, dots, jumpTo }) =>
  <div id="site-slider">
    <TransitionGroup className="slide-wrap">
      <CSSTransition
        in={true}
        key={slide.id}
        timeout={500}
        classNames="fade"
      >
        <Slide slide={slide} index={index} />
      </CSSTransition>
    </TransitionGroup>
    <Dots dots={dots} jumpTo={jumpTo} activeIndex={index} />
  </div>

export default SiteSlider;