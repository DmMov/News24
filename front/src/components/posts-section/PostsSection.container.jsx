import React from 'react';

// * Components
import { PostsSection } from './PostsSection.view';

// * Data
import { NEWS } from 'data/index';

export const PostsSectionContainer = () => {
  const show = {
    showText: true,
    showViews: true,
    showBtn: true
  }

  return <PostsSection
    posts={NEWS} 
    show={show} 
  />
};