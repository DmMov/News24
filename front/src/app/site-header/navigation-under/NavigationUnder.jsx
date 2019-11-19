import React from 'react';
import SiteLogo from './site-logo/SiteLogo';
import AlignSectionBox from 'app/align-section-box/AlignSectionBox';
import { Search } from '@material-ui/icons';
import TagsMenuContainer from './tags-menu/TagsMenu.Container';

import './NavigationUnder.sass';

const NavigationUnder = () =>
  <section id="navigation-under">
    <AlignSectionBox>
      <div className="nu-content-wrap">
        <SiteLogo />
        <TagsMenuContainer />
        <Search className="search-icon" />
      </div>
    </AlignSectionBox>
  </section>

export default NavigationUnder;