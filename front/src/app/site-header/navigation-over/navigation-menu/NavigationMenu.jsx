import React from 'react';
import { NAVIGATION_LINKS } from 'const';
import Link from 'app/common/Link';

import './NavigationMenu.sass';

const NavigationMenu = () =>
  <nav id="navigation-menu">
    <ul className="links-wrap">
      { NAVIGATION_LINKS.map(l => <Link key={l.to} {...l} />) }
    </ul>
  </nav>

export default NavigationMenu;