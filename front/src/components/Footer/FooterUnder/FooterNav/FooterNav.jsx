import React from 'react';
import Link from 'components/common/Link';
import { FOOTER_LINKS } from 'data-export';

import './FooterNav.sass';

const FooterNav = () =>
  <nav id="footer-nav">
    <ul className="links-wrap">
      { FOOTER_LINKS.map(l => <Link key={l.label} {...l} />) }
    </ul>
  </nav>

export default FooterNav;