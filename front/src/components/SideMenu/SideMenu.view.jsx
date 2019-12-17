import React from 'react';
import SiteLogo from 'components/common/SiteLogo/SiteLogo';
import NewsletterView from '../Main/Sidebar/Newsletter/Newsletter.view';

import './SideMenu.style';
import ModalContainer from '../common/Modal/Modal.container';

const SideMenuView = ({ children, open, onClose }) =>
  <ModalContainer open={open} onClose={onClose}>
    <div className="side-menu">
      <header className="side-menu-header">
        <SiteLogo />
      </header>
      {children}
      <NewsletterView />
    </div>
  </ModalContainer>

export default SideMenuView;