import React from 'react';
import { Copyright } from '@material-ui/icons';
import moment from 'moment';

// * Components
import FooterNav from './FooterNav/FooterNav';

// * Sass
import './FooterUnder.sass';

const FooterUnder = () =>
  <div id="footer-under">
    <div className="container">
      <div className="fu-content-box">
        <div className="copyright-box">
          <Copyright className="copy-icon" />
          <span className="copy-year">{moment().year()} </span>
          <span className="copy-text">news24. всі права захищені.</span>
        </div>
        <FooterNav />
      </div>
    </div>
  </div>

export default FooterUnder;