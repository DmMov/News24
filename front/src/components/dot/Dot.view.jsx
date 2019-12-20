import React from 'react';
import { bool, func } from 'prop-types';
import { FiberManualRecord } from '@material-ui/icons';
import cx from 'classnames';

// * Sass
import './Dot.style';

export const Dot = ({ jumpTo, isActive }) =>
  <button onClick={jumpTo} className={cx('dot', isActive && 'active')}>
    <FiberManualRecord className="dot-icon"/>
  </button>

Dot.propTypes = {
  jumpTo: func,
  isActive: bool
}