import React from 'react';
import SlideInfo from './SlideInfo';

const SlideInfoContainer = ({ slide }) => {
  const to = `/${slide.category}`;
  const views = `${slide.views} переглядів`;
  return <SlideInfo {...slide} views={views} to={to} />
};

export default SlideInfoContainer;