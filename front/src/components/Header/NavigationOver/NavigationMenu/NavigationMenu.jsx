import React from 'react';
import { array } from 'prop-types';

// * Components
import { Link } from 'components/index';

// * Sass
import './NavigationMenu.sass';

const NavigationMenu = ({ links }) =>
  <nav className="navigation-menu">
    <ul className="links-wrap">
      { links.map(l => <Link key={l.to} {...l} />) }
    </ul>
  </nav>

NavigationMenu.propTypes = {
  links: array,
}

export default NavigationMenu;