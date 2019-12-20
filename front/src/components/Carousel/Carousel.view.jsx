import React from 'react';
import BitOfNewsContainer from '../Main/News/NewsList/BitOfNews/BitOfNews.container';
import { Dots } from 'components/index';

import './Carousel.style.sass';

export const Carousel = ({ items, show, reference, style, itemStyle, dots, jumpTo, activeIndex }) =>
  <div className="container">
    <div className="carousel" ref={reference}>
      <h1>популярні публікації</h1>
      <div className="carousel-items-wrap" style={style}>
        {items.map(item => <BitOfNewsContainer style={itemStyle} key={item.id} bitOfNews={item} show={show}/>)}
      </div>
      <Dots jumpTo={jumpTo} dots={dots} activeIndex={activeIndex}/>
    </div>
  </div>