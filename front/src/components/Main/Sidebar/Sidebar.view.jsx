import React from 'react';
import NewsletterView from './Newsletter/Newsletter.view';
import NewsBarView from 'components/NewsBar/NewsBar.view';
import { NEWS } from 'data/index';

import './Sidebar.style';

const SidebarView = () =>
  <div id="sidebar" className="dg grid-gap align-self-start">
    <NewsletterView />
    <NewsBarView news={NEWS.slice(0, 4)} title="нещодавні новини" />
  </div>

export default SidebarView;