import React from 'react';
import { Menu } from '@material-ui/icons';

// * Components
import SideMenuView from 'components/SideMenu/SideMenu.view';
import { 
  MainNav,
  AuthStatusPanel
} from 'components/index';

// * Data
import { NAV_LINKS } from 'data/index';

// * Sass
import './HeaderTopbar.style';

export const HeaderTopbar = ({ handleMainOpen, open }) =>
  <div className="header-topbar">
    <div className="container">
      <div className="topbar">
        <SideMenuView open={open} onClose={handleMainOpen} >
          <MainNav links={NAV_LINKS} />
        </SideMenuView>
        <button className="btn menu-btn" onClick={handleMainOpen}>
          <Menu className="menu-icon" />
        </button>
        <MainNav links={NAV_LINKS} />
        <AuthStatusPanel />
      </div>
    </div>
  </div>