import React from 'react';
import SiteLogo from './site-logo/SiteLogo';
import AlignSectionBox from 'app/align-section-box/AlignSectionBox';

import './NavigationUnder.sass';

const NavigationUnder = () =>
  <section id="navigation-under">
    <AlignSectionBox>
      <div className="nu-content-wrap">
        <SiteLogo />
      </div>
    </AlignSectionBox>
  </section>

export default NavigationUnder;