import React from 'react';
import NavigationOver from './NavigationOver/NavigationOver';
import NavigationUnder from './NavigationUnder/NavigationUnder';

const Header = ({ open, ...props }) =>
  <header id="site-header">
    <NavigationOver open={open.main} {...props} />
    <NavigationUnder />
  </header>

export default Header;