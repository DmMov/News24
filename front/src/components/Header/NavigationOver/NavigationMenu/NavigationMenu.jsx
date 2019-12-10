import React from 'react';
import { NAV_LINKS } from 'data/index';
import Link from 'components/common/Link';


import './NavigationMenu.sass';

const NavigationMenu = () =>
  <nav className="navigation-menu">
    <ul className="links-wrap">
      { NAV_LINKS.map(l => <Link key={l.to} {...l} />) }
    </ul>
  </nav>

export default NavigationMenu;