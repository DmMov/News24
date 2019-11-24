import React from 'react';

import img from 'img/24.png';

import './SiteLogo.sass';

const SiteLogo = () =>
  <div id="site-logo">
    <h1 className="logo-text">news</h1>
    <img src={img} alt="24" className="logo-img"/>
  </div>

export default SiteLogo;