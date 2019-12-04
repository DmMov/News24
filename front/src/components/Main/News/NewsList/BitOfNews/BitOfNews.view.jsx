import React from 'react';
import { ImageWrapper } from 'components/_styled/ImageWrapper';
import { StyledBitOfNewsWrapper, StyledBitOfNews } from './BitOfNews.style';
import BitInfoView from './BitInfo/BitInfo.view';

const css = `height: 205px`;

const BitOfNewsView = ({ bitOfNews, views, text, show, to }) =>
  <StyledBitOfNewsWrapper className="bit-wrap">
    <StyledBitOfNews className="bit">
      <ImageWrapper className="img-wrap" css={css}>  
        <img src={bitOfNews.img} />  
      </ImageWrapper>
      <BitInfoView to={to} {...bitOfNews} {...show} views={views} text={text} />
    </StyledBitOfNews>
  </StyledBitOfNewsWrapper>

export default BitOfNewsView;