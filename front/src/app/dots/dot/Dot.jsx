import React from 'react';
import { FiberManualRecord } from '@material-ui/icons';

import cx from 'classnames';

import './Dot.sass';

const Dot = ({ jumpTo, isActive }) =>
  <button onClick={jumpTo} className={cx('dot', isActive && 'active')}>
    <FiberManualRecord className="dot-icon"/>
  </button>

export default Dot;