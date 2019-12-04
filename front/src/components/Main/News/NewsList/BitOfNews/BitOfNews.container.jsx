import React from 'react';
import BitOfNewsView from './BitOfNews.view';

const BitOfNewsContainer = ({ bitOfNews, show }) => {
  const { title, category } = bitOfNews;
  const to = {
    category: `/${category}`,
    post: title.replace(' ', '-')
  }
  const text = bitOfNews.text.slice(0, 85).trim() + '...';
  const views = `${bitOfNews.views} пер.`;
  return <BitOfNewsView bitOfNews={bitOfNews} text={text} views={views} show={show} to={to} />
};

export default BitOfNewsContainer;