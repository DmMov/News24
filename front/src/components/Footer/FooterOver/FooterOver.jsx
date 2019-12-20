import React from 'react';
import SiteLogo from 'components/common/SiteLogo/SiteLogo';
import { CATEGORIES, NEWS } from 'data/index';
import NewsBarView from 'components/NewsBar/NewsBar.view';
import './FooterOver.sass';

const FooterOver = () =>
  <div id="footer-over">
    <div className="container">
      <div className="fo-content-box">
        <SiteLogo />
        <NewsBarView news={NEWS.slice(0, 2)} title="нещодавні новини" />
        <div className="category-list">
          <h3 className="title">категорії</h3>
          <div className="categories-wrap">
            {CATEGORIES.map(({ id, title }) => <div className="category" key={id}>{title.ua}</div>)}
          </div>
        </div>
      </div>
    </div>
  </div>

export default FooterOver;