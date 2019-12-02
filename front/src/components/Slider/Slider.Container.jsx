import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import { NEWS } from 'data/index';
import { useIndex } from 'hooks/useIndex';

const SliderContainer = () => {
  const sliderNews = NEWS.filter(v => v.important);
  const { index, jumpIndex } = useIndex(0, sliderNews.length - 1, 5000);

  return <Slider slide={sliderNews[index]} index={index} dots={sliderNews} jumpTo={jumpIndex} />
};

export default SliderContainer;