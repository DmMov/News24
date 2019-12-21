import React from 'react';

// * Components
import { Link } from 'components/index';

// * Data
import { FOOTER_LINKS } from 'data/index';

// * Sass
import './FooterNav.style';

export const FooterNav = () =>
  <nav id="footer-nav">
    <ul className="links-wrap">
      { FOOTER_LINKS.map(l => <Link key={l.label} {...l} />) }
    </ul>
  </nav>