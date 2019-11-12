import React from 'react';
import AlignSectionBox from 'app/align-section-box/AlignSectionBox';
import NavigationMenu from './navigation-menu/NavigationMenu';

import './NavigationOver.sass';

const NavigationOver = () =>
  <section id="navigation-over">
    <AlignSectionBox>
      <div className="no-content-wrap">
        <NavigationMenu />
      </div>
    </AlignSectionBox>
  </section>

export default NavigationOver;