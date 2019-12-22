import React from 'react';

// * Components
import {
  HeaderTopbar,
  HeaderBottombar
} from 'components/index';

export const Header = ({ open, ...props }) =>
  <header id="header">
    <HeaderTopbar open={open.main} {...props} />
    <HeaderBottombar open={open.categories} {...props} />
  </header>