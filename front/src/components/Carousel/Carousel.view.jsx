import React from 'react';

// * Components
import { 
  Dots,
  PostItemContainer
} from 'components/index';

// * Sass
import './Carousel.style';

export const Carousel = ({ items, show, reference, style, itemStyle, dots, jumpTo, activeIndex }) =>
  <div className="container">
    <div className="carousel" ref={reference}>
      <h1>популярні публікації</h1>
      <div className="carousel-items-wrap" style={style}>
        {items.map(item => <PostItemContainer style={itemStyle} key={item.id} post={item} show={show}/>)}
      </div>
      <Dots jumpTo={jumpTo} dots={dots} activeIndex={activeIndex}/>
    </div>
  </div>