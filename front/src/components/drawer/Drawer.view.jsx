import React from 'react';

// * Layouts
import { Logo } from 'layouts/index';

// * Components
import {
  ModalContainer,
  SubscriptionForm
} from 'components/index';

// * Sass
import './Drawer.style';

export const Drawer = ({ children, open, onClose }) =>
  <ModalContainer open={open} onClose={onClose}>
    <div className="drawer">
      <header className="drawer-header">
        <Logo />
      </header>
      {children}
      <SubscriptionForm />
    </div>
  </ModalContainer>