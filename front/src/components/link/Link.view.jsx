import React from 'react';
import { string, bool } from 'prop-types';
import { Link as RouterLink, Route } from 'react-router-dom';
import cx from 'classnames';

// * Sass
import './Link.style';

export const Link = ({ to, exact, label }) =>
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