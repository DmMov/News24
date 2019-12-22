import React from 'react';
import { array } from 'prop-types';

// * Components
import { Link } from 'components/index';

// * Sass
import './MainNav.style';

export const MainNav = ({ links }) =>
  <nav className="main-nav">
    <ul className="links-wrap">
      { links.map(l => <Link key={l.to} {...l} />) }
    </ul>
  </nav>

MainNav.propTypes = {
  links: array
}