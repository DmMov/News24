import React from 'react';

import img from 'assets/images/24.png';

import './SiteLogo.sass';

const SiteLogo = () =>
  <div className="site-logo">
    <h1 className="logo-text">news</h1>
    <img src={img} alt="24" className="logo-img"/>
  </div>

export default SiteLogo;