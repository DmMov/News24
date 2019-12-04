import React from 'react';
import NewsListView from './NewsList/NewsList.view';

import './News.sass';

const NewsView = ({ ...props }) =>
  <div className="news-section">
    <NewsListView {...props} />
  </div>

export default NewsView;