import React from 'react';
import SiteLogo from './site-logo/SiteLogo';
import AlignSectionBox from 'app/align-section-box/AlignSectionBox';

import './NavigationUnder.sass';
import TagsMenu from './tags-menu/TagsMenu';

import { Search } from '@material-ui/icons';

const NavigationUnder = () =>
  <section id="navigation-under">
    <AlignSectionBox>
      <div className="nu-content-wrap">
        <SiteLogo />
        <TagsMenu />
        <Search className="search-icon" />
      </div>
    </AlignSectionBox>
  </section>

export default NavigationUnder;