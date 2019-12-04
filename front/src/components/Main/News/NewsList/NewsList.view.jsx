import React from 'react';
import BitOfNewsContainer from './BitOfNews/BitOfNews.container';

import './NewsList.style';

const NewsListView = ({ news, show }) =>
  <div className="news-list">
    { news.map(v => <BitOfNewsContainer key={v.id} bitOfNews={v} show={show}/>) }
  </div>

export default NewsListView;