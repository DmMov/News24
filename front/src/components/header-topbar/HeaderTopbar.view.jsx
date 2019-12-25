import React from 'react';
import { Menu } from '@material-ui/icons';

// * Components
import { 
  MainNav,
  AuthStatusPanel,
  Drawer
} from 'components/index';

// * Data
import { NAV_LINKS } from 'data/index';

// * Sass
import './HeaderTopbar.style';

export const HeaderTopbar = ({ handleMainOpen, open }) =>
  <div className="header-topbar">
    <div className="container">
      <div className="topbar">
        <Drawer open={open} onClose={handleMainOpen} >
          <MainNav links={NAV_LINKS} />
        </Drawer>
        <button className="btn menu-btn" onClick={handleMainOpen}>
          <Menu className="menu-icon" />
        </button>
        <MainNav links={NAV_LINKS} />
        <AuthStatusPanel />
      </div>
    </div>
  </div>