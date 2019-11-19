import React from 'react';
import { Link as RouterLink, Route } from 'react-router-dom';
import cx from 'classnames';

const Link = ({ to, exact, label, classes }) => (
  <Route
    path={to}
    exact={exact}
    children={({ match }) => (
      <li className={cx('link-wrap', !!classes && classes)}>
        <RouterLink className={cx('link', !!match && 'active')} to={to}>
          {label}
        </RouterLink>
      </li>
    )}
  />
);

export default Link;