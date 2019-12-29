import React, { useState, useEffect } from 'react';

// * Components
import { Slider } from './Slider.view';

// * Data
import { NEWS } from 'data/index';

// * Hooks
import { useIndex } from 'hooks/useIndex';

const featuredPosts = NEWS.filter(v => v.important);

export const SliderContainer = () => {
  const { index, jumpIndex } = useIndex(0, featuredPosts.length - 1, 5000);
  const [displayIndex, setDisplayIndex] = useState('01');

  useEffect(() => {
    setDisplayIndex(index + 1 < 10 ? `0${index + 1}` : index + 1);
  }, [index])

  return <Slider 
    slide={featuredPosts[index]}
    index={index}
    displayIndex={displayIndex}
    dots={featuredPosts}
    jumpTo={jumpIndex}
  />
};