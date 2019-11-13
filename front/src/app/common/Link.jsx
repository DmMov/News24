import React from 'react';
import { Link as RouterLink, Route } from 'react-router-dom';
import cx from 'classnames';

const Link = ({ to, exact, label }) => (
  <Route
    path={to}
    exact={exact}
    children={({ match }) => (
      <li className="link-wrap">
        <RouterLink className={cx('link', !!match && 'active')} to={to}>
          {label}
        </RouterLink>
      </li>
    )}
  />
);

export default Link;