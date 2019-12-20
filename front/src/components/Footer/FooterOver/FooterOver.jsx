import React from 'react';

// * Layouts
import { Logo } from 'layouts/index';

// * Components
import NewsBarView from 'components/NewsBar/NewsBar.view';

// * Data
import { CATEGORIES, NEWS } from 'data/index';

// * Sass
import './FooterOver.sass';

const FooterOver = () =>
  <div id="footer-over">
    <div className="container">
      <div className="fo-content-box">
        <Logo />
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