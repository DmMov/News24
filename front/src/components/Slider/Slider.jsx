import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Slide from './Slide/Slide';
import Dots from 'components/common/Dots/Dots';

import './Slider.sass';
import { object, number, array, func } from 'prop-types';

const Slider = ({ slide, index, dots, jumpTo }) =>
  <div id="slider">
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

Slider.propTypes = {
  slide: object,
  index: number,
  dots: array,
  jumpTo: func
}

export default Slider;