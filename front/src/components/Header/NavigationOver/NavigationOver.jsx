import React from 'react';
import ASBox from 'components/common/ASBox/ASBox';
import AuthBtns from './AuthStatusPanel/AuthBtns/AuthBtns';
import { Menu } from '@material-ui/icons';
import SideMenuView from 'components/SideMenu/SideMenu.view';
import { NAV_LINKS } from 'data/index';
import NavigationMenu from './NavigationMenu/NavigationMenu';

import './NavigationOver.sass';

const NavigationOver = ({ onSideMenuToggle, open }) =>
  <section id="navigation-over">
    <ASBox>
      <div className="no-content-wrap">
        <SideMenuView open={open} onClose={onSideMenuToggle} >
          <NavigationMenu links={NAV_LINKS} />
        </SideMenuView>
        <button className="btn menu-btn" onClick={onSideMenuToggle}>
          <Menu className="menu-icon" />
        </button>
        <NavigationMenu links={NAV_LINKS} />
        <AuthBtns />
      </div>
    </ASBox>
  </section>

export default NavigationOver;