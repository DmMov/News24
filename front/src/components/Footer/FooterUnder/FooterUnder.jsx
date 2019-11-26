import React from 'react';
import ASBox from 'components/common/ASBox/ASBox';
import FooterNav from './FooterNav/FooterNav';
import { Copyright } from '@material-ui/icons';
import moment from 'moment';

import './FooterUnder.sass';

const FooterUnder = () =>
  <div id="footer-under">
    <ASBox>
      <div className="fu-content-box">
        <div className="copyright-box">
          <Copyright className="copy-icon" />
          <span className="copy-year">{moment().year()} </span>
          <span className="copy-text">news24. всі права захищені.</span>
        </div>
        <FooterNav />
      </div>
    </ASBox>
  </div>

export default FooterUnder;