import React from 'react';
import { FiberManualRecord } from '@material-ui/icons';

import cx from 'classnames';

import './Dot.sass';
import { object, bool } from 'prop-types';

const Dot = ({ jumpTo, isActive }) =>
  <button onClick={jumpTo} className={cx('dot', isActive && 'active')}>
    <FiberManualRecord className="dot-icon"/>
  </button>

Dot.propTypes = {
  jumpTo: object,
  isActive: bool
}

export default Dot;