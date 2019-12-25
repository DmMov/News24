import React from 'react';
import { Search, MoreHorizOutlined } from '@material-ui/icons';

// * Layouts
import { Logo } from 'layouts/index';

// * Components
import { 
  CategoriesNav, 
  CategoriesNavContainer,
  Drawer
} from 'components/index';

// * Data
import { CATEGORIES } from 'data/index';

// * Sass
import './HeaderBottombar.style';

export const HeaderBottombar = ({ handleCategoriesOpen, open }) =>
  <div className="header-bottombar">
    <div className="container">
      <div className="bottombar">
        <Drawer onClose={handleCategoriesOpen} open={open}>
          <CategoriesNav categories={CATEGORIES} />
        </Drawer>
        <Logo />
        <div className="btn-wrap">
          <button className="btn" onClick={handleCategoriesOpen}>
            <MoreHorizOutlined className="dots-icon" />
          </button>
        </div>
        <CategoriesNavContainer />
        <Search className="search-icon" />
      </div>
    </div>
  </div>