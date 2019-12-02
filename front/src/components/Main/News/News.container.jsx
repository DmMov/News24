import React from 'react';
import NewsView from './News.view';
import { NEWS } from 'data/index';

const NewsContainer = () => {
  const show = {
    showText: true,
    showViews: true,
    showBtn: true
  }
  return <NewsView news={NEWS} show={show} />
};

export default NewsContainer;