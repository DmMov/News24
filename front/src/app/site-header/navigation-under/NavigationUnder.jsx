import React from 'react';
import SiteLogo from 'app/common/site-logo/SiteLogo';
import ASBox from 'app/common/as-box/ASBox';
import { Search } from '@material-ui/icons';
import CategoriesMenuContainer from './categories-menu/CategoriesMenu.Container';

import './NavigationUnder.sass';

const NavigationUnder = () =>
  <section id="navigation-under">
    <ASBox>
      <div className="nu-content-wrap">
        <SiteLogo />
        <CategoriesMenuContainer />
        <Search className="search-icon" />
      </div>
    </ASBox>
  </section>

export default NavigationUnder;