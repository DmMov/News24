import React from 'react';
import SiteLogo from 'components/common/SiteLogo/SiteLogo';
import NewsletterView from '../Main/Sidebar/Newsletter/Newsletter.view';

import './SideMenu.style';

const SideMenuView = ({ children }) =>
  <div className="side-menu">
    <header className="side-menu-header">
      <SiteLogo />
    </header>
    {children}
    <NewsletterView />
  </div>

export default SideMenuView;