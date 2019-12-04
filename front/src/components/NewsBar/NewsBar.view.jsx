import React from 'react';
import NewsListView from '../Main/News/NewsList/NewsList.view';

import './NewsBar.style';

const NewsBarView = ({ news, title }) =>
  <div className="news-bar">
    <h3 className="news-bar-title">{title}</h3>
    <NewsListView news={news} />
  </div>

export default NewsBarView;