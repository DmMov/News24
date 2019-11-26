import React from 'react';
import BitOfNews from './BitOfNews/BitOfNews';

import './News.sass';

const News = ({ news }) =>
  <div className="news-section">
    <div className="news-wrap">
      { news.map(v => <BitOfNews key={v.id} {...v} showViews showText/>) }
    </div>
  </div>

export default News;