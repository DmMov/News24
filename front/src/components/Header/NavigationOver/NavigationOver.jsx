import React from 'react';
import { Menu } from '@material-ui/icons';

// * Components
import AuthBtns from './AuthStatusPanel/AuthBtns/AuthBtns';
import SideMenuView from 'components/SideMenu/SideMenu.view';
import NavigationMenu from './NavigationMenu/NavigationMenu';

// * Data
import { NAV_LINKS } from 'data/index';

// * Sass
import './NavigationOver.sass';

const NavigationOver = ({ onSideMenuToggle, open }) =>
  <section id="navigation-over">
    <div className="container">
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
    </div>
  </section>

export default NavigationOver;