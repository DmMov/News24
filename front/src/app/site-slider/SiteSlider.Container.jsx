import React, { useState, useEffect } from 'react';
import SiteSlider from './SiteSlider';
import { NEWS } from 'const';

const SiteSliderContainer = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const autoplay = () => {
    setSlideIndex(v => {
      if (NEWS.length - 1 == v)
        return 0;
      else
        return v + 1;
    });
  }

  useEffect(() => {
    const interval = setInterval(() => autoplay(), 5000);
    return () => clearInterval(interval);
  }, []);

  return <SiteSlider slide={NEWS[slideIndex]} />
};

export default SiteSliderContainer;