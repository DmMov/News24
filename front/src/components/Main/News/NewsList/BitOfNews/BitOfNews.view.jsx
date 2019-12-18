import React from 'react';
import { StyledBitOfNewsWrapper, StyledBitOfNews } from './BitOfNews.style';
import BitInfoView from './BitInfo/BitInfo.view';

const BitOfNewsView = ({ bitOfNews, views, text, show, to }) =>
  <StyledBitOfNewsWrapper className="bit-wrap">
    <StyledBitOfNews className="bit">
      <div className="image-wrap">  
        <img src={bitOfNews.img} />
      </div>
      <BitInfoView to={to} {...bitOfNews} {...show} views={views} text={text} />
    </StyledBitOfNews>
  </StyledBitOfNewsWrapper>

export default BitOfNewsView;