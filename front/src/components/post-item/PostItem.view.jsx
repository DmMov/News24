import React from 'react';

// * Components
import { PostInfo } from 'components/index';

// * Sass
import './PostItem.style';

export const PostItem = ({ post, views, text, show, to, style }) =>
  <div className="post-item dg" style={style}>
    <div className="post-item-inner-wrap dg">
      <div className="image-wrap">  
        <img src={post.img} />
      </div>
      <PostInfo to={to} {...post} {...show} views={views} text={text} />
    </div>
  </div>