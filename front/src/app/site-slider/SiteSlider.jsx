import React from 'react';

import './SiteSlider.sass';
import Slide from './slide/Slide';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const SiteSlider = ({ slide }) =>
  <div id="site-slider">
    <TransitionGroup className="slide-wrap">
      <CSSTransition
        in={true}
        key={slide.id}
        timeout={500}
        classNames="fade"
      >
        <Slide {...slide} />
      </CSSTransition>
    </TransitionGroup>
  </div>

export default SiteSlider;