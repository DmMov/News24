import React from 'react';
import BitOfNewsContainer from './BitOfNews/BitOfNews.container';

import './News.sass';

const NewsView = ({ news, show }) =>
  <div className="news-section">
    <div className="news-wrap">
      { news.map(bitOfNews => <BitOfNewsContainer key={bitOfNews.id} bitOfNews={bitOfNews} show={show}/>) }
    </div>
  </div>

export default NewsView;