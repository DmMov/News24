import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FiberManualRecordRounded, ArrowRightAltRounded, VisibilityOutlined } from '@material-ui/icons';

// * Sass
import './PostInfo.style';

const Views = ({ views }) => 
  <p className="post-views-box">
    <FiberManualRecordRounded className="dot-icon"/>
    <VisibilityOutlined className="stat-icon"/>
    <span className="views-amount">{views}</span>
  </p>

const Text = ({ text }) => 
  <p className="post-text">{text}</p>

const ReadMore = ({ to }) => 
  <RouterLink to={to} className="read-more-link link">
    <span className="read-more-text">читати більше</span>
    <ArrowRightAltRounded className="arrow-icon"/>
  </RouterLink>

export const PostInfo = ({ to, category, title, createdAt, views, text, showText, showViews, showBtn }) => 
  <div className="post-info">
    <RouterLink to={to.category} className="post-category link">{category}</RouterLink>
    <RouterLink to={to.post} className="link">
      <h2 className="post-title">{title}</h2>
    </RouterLink>
    <div className="post-details">
      <span className="post-created-at">{createdAt}</span>
      {showViews && <Views views={views} />}        
    </div>
    {showText && <Text text={text} />}
    {showBtn && <ReadMore to={to.post} />}
  </div>