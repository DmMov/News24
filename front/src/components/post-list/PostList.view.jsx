import React from 'react';

// * Components
import { PostItemContainer } from 'components/index';

// * Sass
import './PostList.style';

export const PostList = ({ posts, show }) =>
  <div className="post-list">
    { posts.map(v => <PostItemContainer key={v.id} post={v} show={show} />) }
  </div>