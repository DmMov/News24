import React from 'react';
import { Search, MoreHorizOutlined } from '@material-ui/icons';

// * Layouts
import { Logo } from 'layouts/index';

// * Components
import CategoriesMenuContainer from './CategoriesMenu/CategoriesMenu.Container';
import SideMenuView from 'components/SideMenu/SideMenu.view';
import CategoriesMenu from './CategoriesMenu/CategoriesMenu';

// * Data
import { CATEGORIES } from 'data/index';

// * Sass
import './NavigationUnder.sass';

const NavigationUnder = ({ onCategoryMenuToggle, open }) =>
  <section id="navigation-under">
    <div className="container">
      <div className="nu-content-wrap">
        <SideMenuView onClose={onCategoryMenuToggle} open={open}>
          <CategoriesMenu categories={CATEGORIES} />
        </SideMenuView>
        <Logo />
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