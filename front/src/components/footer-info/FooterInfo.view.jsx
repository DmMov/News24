import React from 'react';
import { Copyright } from '@material-ui/icons';
import moment from 'moment';

// * Components
import { FooterNav } from 'components/index';

// * Sass
import './FooterInfo.style';

export const FooterInfo = () =>
  <div className="footer-info">
    <div className="container">
      <div className="info-wrap">
        <div className="copyright-box">
          <Copyright className="copy-icon" />
          <span className="copy-year">{moment().year()} </span>
          <span className="copy-text">news24. всі права захищені.</span>
        </div>
        <FooterNav />
      </div>
    </div>
  </div>