import React from 'react';

import img from 'img/1-74.jpg';

import './SiteSlider.sass';

const SiteSlider = () =>
  <div id="site-slider">
    <img src={img} className="slide-img" />
  </div>

export default SiteSlider;