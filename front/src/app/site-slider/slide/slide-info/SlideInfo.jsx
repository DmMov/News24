import React from 'react';
import { FiberManualRecord, EqualizerRounded } from '@material-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

import './SlideInfo.sass';

const SlideInfo = ({ to, category, title, author, createdAt, views }) => 
  <div className="slide-info">
    <p className="slide-category">
      <RouterLink className="link" to={to}>
        {category}
      </RouterLink>
    </p>
    <h1 className="slide-title">{title}</h1>
    <div className="details">
      <p className="author">{author}</p>
      <FiberManualRecord className="dot-icon"/>
      <p className="created-at">{createdAt}</p>
      <FiberManualRecord className="dot-icon"/>
      <div className="views-box">
        <EqualizerRounded className="stat-icon" />
        <p className="views">{views}</p>
      </div>
    </div>
  </div>

export default SlideInfo;