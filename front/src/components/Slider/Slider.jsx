import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Slide from './Slide/Slide';
import Dots from 'components/common/Dots/Dots';
import { NEWS } from 'data/index';
import NewsBarView from 'components/NewsBar/NewsBar.view';
import { object, number, array, func } from 'prop-types';

import './Slider.sass';

const Slider = ({ slide, index, dots, jumpTo }) =>
  <div id="slider">
    <div className="container">
      <TransitionGroup className="slide-wrap">
        <CSSTransition
          in={true}
          key={slide.id}
          timeout={1000}
          classNames="fade"
        >
          <Slide slide={slide} index={index} />
        </CSSTransition>
      </TransitionGroup>
      <div className="container bar-container abs-stretch">
        <NewsBarView news={NEWS.slice(4, 8)} title="гарячі новини" />
      </div>
      <Dots dots={dots} jumpTo={jumpTo} activeIndex={index} />
    </div>
  </div>

Slider.propTypes = {
  slide: object,
  index: number,
  dots: array,
  jumpTo: func
}

export default Slider;