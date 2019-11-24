import React from 'react';
import ASBox from 'app/common/as-box/ASBox';
import NavigationMenu from './navigation-menu/NavigationMenu';
import AuthBtns from './auth-status-panel/auth-btns/AuthBtns';

import './NavigationOver.sass';

const NavigationOver = () =>
  <section id="navigation-over">
    <ASBox>
      <div className="no-content-wrap">
        <NavigationMenu />
        <AuthBtns />
      </div>
    </ASBox>
  </section>

export default NavigationOver;