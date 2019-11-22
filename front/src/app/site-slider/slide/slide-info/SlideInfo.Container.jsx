import React from 'react';
import SlideInfo from './SlideInfo';

const SlideInfoContainer = ({ slide }) => {
  const to = `/${slide.category}`;
  const views = `${slide.views/1000}K views`;
  return <SlideInfo {...slide} views={views} to={to} />
};

export default SlideInfoContainer;