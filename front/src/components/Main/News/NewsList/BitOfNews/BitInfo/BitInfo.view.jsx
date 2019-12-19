import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FiberManualRecordRounded, ArrowRightAltRounded, VisibilityOutlined } from '@material-ui/icons';

import './BitInfo.style';

const Views = ({ show, views }) => 
  show ?
    <p className="bit-views-box">
      <FiberManualRecordRounded className="dot-icon"/>
      <VisibilityOutlined className="stat-icon"/>
      <span className="views-amount">{views}</span>
    </p> : false

const Text = ({ show, text }) => 
  show ?
    <p className="bit-text">
      {text}
    </p> : false

const ReadMore = ({ show, to }) => 
  show ?
    <RouterLink to={to} className="read-more-link">
      <span className="read-more-text">читати більше</span>
      <ArrowRightAltRounded className="arrow-icon"/>
    </RouterLink> : false

const BitInfoView = ({ to, category, title, createdAt, views, text, showText, showViews, showBtn }) => 
  <div className="bit-info">
    <RouterLink to={to.category} className="bit-category">{category}</RouterLink>
    <RouterLink to={to.post}>
      <h2 className="bit-title">{title}</h2>
    </RouterLink>
    <div className="bit-details">
      <span className="bit-created-at">{createdAt}</span>
      <Views show={showViews} views={views} />        
    </div>
    <Text show={showText} text={text} />
    <ReadMore show={showBtn} to={to.post} />
  </div>

export default BitInfoView;