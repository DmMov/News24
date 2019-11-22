import React from 'react';
import AlignSectionBox from 'app/align-section-box/AlignSectionBox';
import FooterNav from './footer-nav/FooterNav';
import { Copyright } from '@material-ui/icons';
import moment from 'moment';

import './FooterUnder.sass';

const FooterUnder = () =>
  <div id="footer-under">
    <AlignSectionBox>
      <div className="fu-content-box">
        <div className="copyright-box">
          <Copyright className="copy-icon" />
          <span className="copy-year">{moment().year()} </span>
          <span className="copy-text">news24. всі права захищені.</span>
        </div>
        <FooterNav />
      </div>
    </AlignSectionBox>
  </div>

export default FooterUnder;