import React from 'react';

// * Assets
import img from 'assets/images/24.png';

// * Sass
import './Logo.style';

export const Logo = () =>
  <div className="site-logo">
    <h1 className="logo-text">news</h1>
    <img src={img} alt="24" className="logo-img"/>
  </div>