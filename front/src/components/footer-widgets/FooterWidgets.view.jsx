import React from 'react';

// * Layouts
import { Logo } from 'layouts/index';

// * Components
import { PostsWidget } from 'components/index';

// * Data
import { CATEGORIES, NEWS } from 'data/index';

// * Sass
import './FooterWidgets.style';

const style = {
  padding: 0
}

export const FooterWidgets = () =>
  <div className="footer-widgets">
    <div className="container">
      <div className="widgets-wrap">
        <Logo />
        <PostsWidget 
          posts={NEWS.slice(0, 2)} 
          title="нещодавні новини"
          widgetThemeClass="dark"
          style={style}
        />
        <div className="category-list">
          <h3 className="title">категорії</h3>
          <div className="categories-wrap">
            {CATEGORIES.map(({ id, title }) => <div className="category" key={id}>{title.ua}</div>)}
          </div>
        </div>
      </div>
    </div>
  </div>