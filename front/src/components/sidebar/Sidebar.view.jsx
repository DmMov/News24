import React from 'react';

// * Components
import {
  SubscriptionForm,
  PostsWidget
} from 'components/index';

// * Data
import { NEWS } from 'data/index';

// * Sass
import './Sidebar.style';

export const Sidebar = () =>
  <div id="sidebar" className="dg grid-gap align-self-start">
    <SubscriptionForm />
    <PostsWidget posts={NEWS.slice(0, 4)} title="нещодавні новини" />
  </div>