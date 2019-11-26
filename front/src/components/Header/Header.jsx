import React from 'react';
import NavigationOver from './NavigationOver/NavigationOver';
import NavigationUnder from './NavigationUnder/NavigationUnder';

const Header = () =>
  <header id="site-header">
    <NavigationOver />
    <NavigationUnder />
  </header>

export default Header;