import React from 'react';
import BitOfNewsView from './BitOfNews.view';

const BitOfNewsContainer = ({ bitOfNews, ...props }) => {
  const { title, category } = bitOfNews;
  const to = {
    category: `/${category}`,
    post: title.replace(' ', '-')
  }
  const text = bitOfNews.text.slice(0, 85).trim() + '...';
  const views = `${bitOfNews.views} пер.`;
  return <BitOfNewsView {...props} bitOfNews={bitOfNews} text={text} views={views} to={to} />
};

export default BitOfNewsContainer;