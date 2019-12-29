import React from 'react';

// * Components
import { IndexBox } from 'layouts/index';

// * Sass
import './Slide.style';

export const Slide = ({ slide, displayIndex }) =>
  <div className="slide">
    <div className="img-wrap abs-stretch">
      <img src={slide.img} className="slide-img" />
    </div>
    <div className="slide-inf-wrap">
      <IndexBox index={displayIndex} text="рекомендовані" />
      {/*
        // TODO: Add post info 
      */}
    </div>
  </div>