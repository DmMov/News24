import React from 'react';

import './Newsletter.style';

const NewsletterView = () =>
  <div id="subscription-wrap">
    <div className="subscription">
      <h3 className="sub-title">підписка</h3>
      <p className="sub-description">підпишись на нашу розсилку і дізнавайся першим про новини.</p>
      <input type="text" placeholder="Електронна адреса" className="email-input"/>
      <div className="terms-box">
        <input type="checkbox"/>
        <a href="#">Я погоджуюсь з умовами використання</a>
      </div>
      <button className="sub-button">підписатися</button>
    </div>
  </div>

export default NewsletterView;