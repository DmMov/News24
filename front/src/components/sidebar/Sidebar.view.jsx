import React from 'react';

// * Components
import { SubscriptionForm } from 'components/index';
import NewsBarView from 'components/NewsBar/NewsBar.view';

// * Data
import { NEWS } from 'data/index';

// * Sass
import './Sidebar.style';

export const Sidebar = () =>
  <div id="sidebar" className="dg grid-gap align-self-start">
    <SubscriptionForm />
    <NewsBarView news={NEWS.slice(0, 4)} title="нещодавні новини" />
  </div>