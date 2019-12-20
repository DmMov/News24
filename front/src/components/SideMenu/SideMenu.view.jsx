import React from 'react';

// * Layouts
import { Logo } from 'layouts/index';

// * Components
import NewsletterView from '../Main/Sidebar/Newsletter/Newsletter.view';
import { ModalContainer } from 'components/index';

// * Sass
import './SideMenu.style';

const SideMenuView = ({ children, open, onClose }) =>
  <ModalContainer open={open} onClose={onClose}>
    <div className="side-menu">
      <header className="side-menu-header">
        <Logo />
      </header>
      {children}
      <NewsletterView />
    </div>
  </ModalContainer>

export default SideMenuView;