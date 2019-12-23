import React from 'react';

// * Components
import { PostList } from 'components/index';

// * Sass
import './PostsSection.style';

export const PostsSection = ({ ...props }) =>
  <div className="posts-section">
    <PostList {...props} />
  </div>