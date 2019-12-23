import React from 'react';

// * Components
import { PostList } from 'components/index';

// * Sass
import './NewsBar.style';

const NewsBarView = ({ news, title }) =>
  <div className="news-bar">
    <h3 className="news-bar-title">{title}</h3>
    <PostList news={news} />
  </div>

export default NewsBarView;