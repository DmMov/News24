import React from 'react';
import SiteLogo from 'components/common/SiteLogo/SiteLogo';
import { Search, MoreHorizOutlined } from '@material-ui/icons';
import CategoriesMenuContainer from './CategoriesMenu/CategoriesMenu.Container';
import SideMenuView from 'components/SideMenu/SideMenu.view';
import CategoriesMenu from './CategoriesMenu/CategoriesMenu';
import { CATEGORIES } from 'data/index';

import './NavigationUnder.sass';

const NavigationUnder = ({ onCategoryMenuToggle, open }) =>
  <section id="navigation-under">
    <div className="container">
      <div className="nu-content-wrap">
        <SideMenuView onClose={onCategoryMenuToggle} open={open}>
          <CategoriesMenu categories={CATEGORIES} />
        </SideMenuView>
        <SiteLogo />
        <div className="btn-wrap">
          <button className="btn" onClick={onCategoryMenuToggle}>
            <MoreHorizOutlined className="dots-icon" />
          </button>
        </div>
        <CategoriesMenuContainer />
        <Search className="search-icon" />
      </div>
    </div>
  </section>

export default NavigationUnder;