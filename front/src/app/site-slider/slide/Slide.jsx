import React from 'react';
import AlignSectionBox from 'app/align-section-box/AlignSectionBox';
import { Link as RouterLink } from 'react-router-dom';

import './Slide.sass';
import { FiberManualRecord, EqualizerRounded } from '@material-ui/icons';

const Slide = ({ img, title, tag, index, author, createdAt, views }) =>
  <div className="slide">
    <img src={img} className="slide-img" />
    <AlignSectionBox>
      <div className="slide-inf-wrap">
        <div className="featured-index-box">
          <div className="featured-index">
            <p className="index">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </p>
          </div>
          <p className="featured-text">— важливе</p>
        </div>
        <p className="slide-tag">
          <RouterLink className="link" to={`/${tag}`}>
            {tag}
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
            <p className="views">{`${views / 1000}K views`}</p>
          </div>
        </div>
      </div>
    </AlignSectionBox>
  </div>


export default Slide;