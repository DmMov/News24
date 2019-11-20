import React from 'react';
import AlignSectionBox from 'app/align-section-box/AlignSectionBox';
import { Link as RouterLink } from 'react-router-dom';

import './Slide.sass';

const Slide = ({ img, title, tag, index, author, createdAt, views, featured }) =>
  <div className="slide">
    <img src={img} className="slide-img" />
    <AlignSectionBox>
      <div className="slide-inf-wrap">
        <div className="featured-index-box">
          <div className="featured-index">
            <p className="index">
              {index + 1}
            </p>
          </div>
          <p className="featured-text">-  важливе</p>
        </div>
        <p className="slide-tag">
          <RouterLink className="link" to={`/${tag}`}>
            {tag}
          </RouterLink>
        </p>
        <h1 className="slide-title">{title}</h1>
      </div>
    </AlignSectionBox>
  </div>


export default Slide;