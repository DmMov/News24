import React, { useState, useRef, useEffect } from 'react';
import { Carousel } from './Carousel.view';
import { NEWS } from 'data/index';
import { ResizeSensor } from 'css-element-queries';
import { useIndex } from 'hooks/useIndex';

const CarouselContainer = () => {
  const [itemsPerView, setItemsPerView] = useState(4);
  const { index, jumpIndex } = useIndex(0, 12/itemsPerView - 1);
 
  const ref = useRef({});
  const items = NEWS.slice(0, 12);
  const show = {
    showText: false,
    showViews: true,
    showBtn: false
  }
  
  useEffect(() => {
    new ResizeSensor(ref.current, () => {
      const currentWidth = ref.current.offsetWidth;
      setItemsPerView(() => {
        switch (true) {
          case currentWidth <= 500:
            return 1;
          case currentWidth <= 800:
            return 2; 
          case currentWidth <= 1000:
            return 3;
          default:
            return 4;
        }
      });
    });
  }, []);

  return <Carousel
    items={items} 
    reference={ref} 
    show={show}
    dots={items.slice(0, items.length/itemsPerView)}
    activeIndex={index}
    jumpTo={jumpIndex}
    style={{
      transform: `translateX(-${index*(100/itemsPerView)*itemsPerView}%)`,
    }}
    itemStyle={{
      minWidth: `calc(${100/itemsPerView}% - 2rem)`
    }}
  />
};

export default CarouselContainer;