import React from 'react';
import { StyledCarousel, StyledCarouselWrapper } from './Carousel.style';
import BitOfNewsContainer from '../Main/News/NewsList/BitOfNews/BitOfNews.container';
import Dots from 'components/common/Dots/Dots';

const CarouselView = ({ items, show, reference, style, itemsPerView, dots, jumpTo, activeIndex }) =>
  <div className="container">
    <StyledCarouselWrapper ref={reference}>
      <h1>популярні публікації</h1>
      <StyledCarousel style={style} itemsPerView={itemsPerView}>
        {
          items.map(item => <BitOfNewsContainer key={item.id} bitOfNews={item} show={show}/>)
        }
      </StyledCarousel>
      <Dots jumpTo={jumpTo} dots={dots} activeIndex={activeIndex}/>
    </StyledCarouselWrapper>
  </div>

export default CarouselView;