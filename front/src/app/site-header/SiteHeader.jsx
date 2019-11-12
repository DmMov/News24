import React from 'react';
import NavigationOver from './navigation-over/NavigationOver';
import NavigationUnder from './navigation-under/NavigationUnder';

const SiteHeader = () =>
  <header id="site-header">
    <NavigationOver />
    <NavigationUnder />
  </header>

export default SiteHeader;