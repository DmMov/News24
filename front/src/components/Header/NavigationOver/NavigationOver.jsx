import React from 'react';
import ASBox from 'components/common/ASBox/ASBox';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import AuthBtns from './AuthStatusPanel/AuthBtns/AuthBtns';

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