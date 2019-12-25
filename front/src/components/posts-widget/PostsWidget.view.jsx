import React from 'react';
import classnames from 'classnames';

// * Components
import { PostList } from 'components/index';

// * Sass
import './PostsWidget.style';

export const PostsWidget = ({ posts, title, widgetThemeClass = 'classic', style }) =>
  <div className={classnames('posts-widget', widgetThemeClass)} style={style && style}>
    <h3 className="posts-widget-title">{title}</h3>
    <PostList posts={posts} />
  </div>