import React from 'react';

// * Components
import { PostItemContainer } from 'components/index';

// * Sass
import './PostList.style';

export const PostList = ({ news, show }) =>
  <div className="post-list">
    { news.map(v => <PostItemContainer key={v.id} post={v} show={show}/>) }
  </div>