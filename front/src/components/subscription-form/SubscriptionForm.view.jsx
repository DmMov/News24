import React from 'react';

// * Sass
import './SubscriptionForm.style';

export const SubscriptionForm = () =>
  <form className="subscription-form form">
    <h3 className="sub-title">підписка</h3>
    <p className="sub-description">підпишись на нашу розсилку і дізнавайся першим про новини.</p>
    <input type="text" placeholder="Електронна адреса" className="email-input"/>
    <div className="terms-box">
      <input type="checkbox"/>
      <a href="#">Я погоджуюсь з умовами використання</a>
    </div>
    <button className="sub-button" type="submit">підписатися</button>
  </form>