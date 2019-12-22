import React from 'react';
import { Search, MoreHorizOutlined } from '@material-ui/icons';

// * Layouts
import { Logo } from 'layouts/index';

// * Components
import { 
  CategoriesNav, 
  CategoriesNavContainer 
} from 'components/index';
import SideMenuView from 'components/SideMenu/SideMenu.view';

// * Data
import { CATEGORIES } from 'data/index';

// * Sass
import './HeaderBottombar.style';

export const HeaderBottombar = ({ onCategoryMenuToggle, open }) =>
  <div className="header-bottombar">
    <div className="container">
      <div className="bottombar">
        <SideMenuView onClose={onCategoryMenuToggle} open={open}>
          <CategoriesNav categories={CATEGORIES} />
        </SideMenuView>
        <Logo />
        <div className="btn-wrap">
          <button className="btn" onClick={onCategoryMenuToggle}>
            <MoreHorizOutlined className="dots-icon" />
          </button>
        </div>
        <CategoriesNavContainer />
        <Search className="search-icon" />
      </div>
    </div>
  </div>