import React from 'react';
import SlideIndexBox from './SlideIndexBox';

const SlideIndexBoxContainer = ({ index }) => {
  index = index + 1 < 10 ? `0${index + 1}` : index + 1;
  return <SlideIndexBox index={index} />
};

export default SlideIndexBoxContainer;