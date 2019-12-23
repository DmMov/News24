import React from 'react';

// * Components
import { PostItem } from './PostItem.view';

export const PostItemContainer = ({ post, ...props }) => {
  const { title, category } = post;
  const to = {
    category: `/${category}`,
    post: title.replace(' ', '-')
  }
  const text = post.text.slice(0, 85).trim() + '...';
  const views = `${post.views} пер.`;

  return <PostItem
    {...props} 
    post={post} 
    text={text} 
    views={views} 
    to={to} 
    />
};