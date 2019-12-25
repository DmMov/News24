import React from 'react';
import { object, number, array, func } from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// * Components
import Slide from './Slide/Slide';
import {
  Dots,
  PostsWidget
} from 'components/index';

// * Data
import { NEWS } from 'data/index';

// * Sass
import './Slider.sass';

const style = {
  position: 'absolute',
  top: '3rem',
  right: '1rem',
  zIndex: 10
};

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
        <PostsWidget 
          posts={NEWS.slice(4, 8)} 
          title="гарячі новини"
          widgetThemeClass="transparent-dark"
          style={style}
        />
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