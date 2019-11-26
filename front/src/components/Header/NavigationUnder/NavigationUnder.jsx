import React from 'react';
import SiteLogo from 'components/common/SiteLogo/SiteLogo';
import ASBox from 'components/common/ASBox/ASBox';
import { Search } from '@material-ui/icons';
import CategoriesMenuContainer from './CategoriesMenu/CategoriesMenu.Container';

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