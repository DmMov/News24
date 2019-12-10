import React from 'react';
import ASBox from 'components/common/ASBox/ASBox';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import AuthBtns from './AuthStatusPanel/AuthBtns/AuthBtns';
import { Menu } from '@material-ui/icons';
import SideMenuView from 'components/SideMenu/SideMenu.view';
import ModalContainer from 'components/common/Modal/Modal.container';

import './NavigationOver.sass';

const NavigationOver = ({ onSideMenuToggle, open }) =>
  <section id="navigation-over">
    <ASBox>
      <div className="no-content-wrap">
        <button className="btn" onClick={onSideMenuToggle}>
          <Menu className="menu-icon" />
        </button>
        <ModalContainer onClose={onSideMenuToggle} open={open}>
          <SideMenuView>
            <NavigationMenu />
          </SideMenuView>
        </ModalContainer>
        <NavigationMenu />
        <AuthBtns />
      </div>
    </ASBox>
  </section>

export default NavigationOver;