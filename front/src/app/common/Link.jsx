import React from 'react';
import { Link as RouterLink, Route } from 'react-router-dom';
import cx from 'classnames';
import { string, bool } from 'prop-types';

const Link = ({ to, exact, label }) =>
  <Route
    path={to}
    exact={exact}
    children={({ match }) =>
      <li className="link-wrap">
        <RouterLink className={cx('link', !!match && 'active')} to={to}>
          {label}
        </RouterLink>
      </li>
    }
  />

Link.propTypes = {
  to: string,
  exact: bool,
  label: string
}

export default Link;