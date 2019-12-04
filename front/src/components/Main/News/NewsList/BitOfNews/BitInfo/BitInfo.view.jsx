import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { StyledBitInfo } from './BitInfo.style';
import { FiberManualRecordRounded, EqualizerRounded, ArrowRightAltRounded, VisibilityOutlined } from '@material-ui/icons';

const BitInfoView = ({ to, category, title, createdAt, views, text, showText, showViews, showBtn }) => 
  <StyledBitInfo className="bit-info">
    <RouterLink to={to.category} className="bit-category">{category}</RouterLink>
    <RouterLink to={to.post}>
      <h2 className="bit-title">{title}</h2>
    </RouterLink>
    <div className="bit-details">
      <span className="bit-created-at">{createdAt}</span>
      {showViews && <>
        <FiberManualRecordRounded className="dot-icon"/>
        <VisibilityOutlined className="stat-icon"/>
        <span>{views}</span>
      </>}
    </div>
    {showText && <p className="bit-text">{text}</p>} 
    {showBtn && <RouterLink to={to.post} className="read-more-link">
        читати більше
        <ArrowRightAltRounded className="arrow-icon"/>
      </RouterLink> 
    }
  </StyledBitInfo>

export default BitInfoView;