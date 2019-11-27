import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import { NEWS } from 'data/index';

const SliderContainer = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [jumpToggle, setJumpToggle] = useState(true);
  const sliderNews = NEWS.filter(v => v.important);
  const autoplay = () => {
    setSlideIndex(v => {
      if (sliderNews.length - 1 == v)
        return 0;
      else
        return v + 1;
    });
  }

  const jumpTo = i => {
    setSlideIndex(i);
    setJumpToggle(v => !v);
  }

  useEffect(() => {
    const interval = setInterval(() => autoplay(), 5000);
    return () => clearInterval(interval);
  }, [jumpToggle]);

  return <Slider slide={sliderNews[slideIndex]} index={slideIndex} dots={sliderNews} jumpTo={jumpTo} />
};

export default SliderContainer;