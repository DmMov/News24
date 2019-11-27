import React from 'react';
import SiteLogo from 'components/common/SiteLogo/SiteLogo';
import ASBox from 'components/common/ASBox/ASBox';
import { CATEGORIES } from 'data/index';

import './FooterOver.sass';

const FooterOver = () =>
  <div id="footer-over">
    <ASBox>
      <div className="fo-content-box">
        <SiteLogo />
        <div></div>
        <div className="category-list">
          <h3 className="title">категорії</h3>
          <div className="categories-wrap">
            {CATEGORIES.map(({ id, title }) => <div className="category" key={id}>{title.ua}</div>)}
          </div>
        </div>
      </div>
    </ASBox>
  </div>

export default FooterOver;