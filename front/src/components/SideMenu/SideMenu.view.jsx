import React from 'react';

// * Layouts
import { Logo } from 'layouts/index';

// * Components
import { 
  ModalContainer,
  SubscriptionForm
} from 'components/index';

// * Sass
import './SideMenu.style';

const SideMenuView = ({ children, open, onClose }) =>
  <ModalContainer open={open} onClose={onClose}>
    <div className="side-menu">
      <header className="side-menu-header">
        <Logo />
      </header>
      {children}
      <SubscriptionForm />
    </div>
  </ModalContainer>

export default SideMenuView;