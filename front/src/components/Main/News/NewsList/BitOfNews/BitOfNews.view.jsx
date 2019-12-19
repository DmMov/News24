import React from 'react';
import BitInfoView from './BitInfo/BitInfo.view';

import './BitOfNews.style';

const BitOfNewsView = ({ bitOfNews, views, text, show, to }) =>
  <div className="bit dg">
    <div className="bit-inner-wrap dg">
      <div className="image-wrap">  
        <img src={bitOfNews.img} />
      </div>
      <BitInfoView to={to} {...bitOfNews} {...show} views={views} text={text} />
    </div>
  </div>

export default BitOfNewsView;