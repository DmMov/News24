import React from 'react';

import { EqualizerRounded, FiberManualRecordRounded, ArrowRightAltRounded } from '@material-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import './BitOfNews.sass';

const BitOfNews = ({ img, category, title, createdAt, views, text, showViews, showText }) =>
  <div className="bit-of-news">
    <div className="bit-of-news-inner-wrap">
      <div className="img-wrap">  
        <img src={img}/>  
      </div>
      <div className="info-wrap">
        <RouterLink to={`/${category}`} className="post-category">{category}</RouterLink>
        <h2 className="post-title">{title}</h2>
        <div className="post-details">
          <span>{createdAt},</span>
          <FiberManualRecordRounded className="dot-icon"/>
          <EqualizerRounded className="stat-icon"/>
          <span>{showViews && `${views / 1000}K views`}</span>
        </div>
        {showText && <p className="post-text">{text.slice(0, 100).trim() + '...'}</p>} 
        <RouterLink to="#" className="read-more-link">читати більше<ArrowRightAltRounded className="arrow-icon"/></RouterLink>
      </div>
    </div>
  </div>

export default BitOfNews;