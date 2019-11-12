import React from 'react';
import AlignSectionBox from 'app/align-section-box/AlignSectionBox';
import NavigationMenu from './navigation-menu/NavigationMenu';

import './NavigationOver.sass';
import AuthBtns from './auth-status-panel/auth-btns/AuthBtns';

const NavigationOver = () =>
  <section id="navigation-over">
    <AlignSectionBox>
      <div className="no-content-wrap">
        <NavigationMenu />
        <AuthBtns />
      </div>
    </AlignSectionBox>
  </section>

export default NavigationOver;