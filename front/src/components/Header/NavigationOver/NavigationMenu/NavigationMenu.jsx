import React from 'react';
import Link from 'components/common/Link';

import './NavigationMenu.sass';
import { array } from 'prop-types';

const NavigationMenu = ({ links }) =>
  <nav className="navigation-menu">
    <ul className="links-wrap">
      { links.map(l => <Link key={l.to} {...l} />) }
    </ul>
  </nav>

export default NavigationMenu;

NavigationMenu.propTypes = {
  links: array,
}