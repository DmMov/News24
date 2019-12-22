import React from 'react';
import { array, object } from 'prop-types';

// * Components
import { 
  Link, 
  CategoriesPopUp 
} from 'components/index';

// * Sass
import './CategoriesNav.style';

export const CategoriesNav = ({ categories, reference, categoriesToPopUp }) =>
  <nav className="categories-nav" ref={reference}>
    <ul className="links-wrap">
      { categories.map(({ id, title }) => <Link key={id} to={`/${title.en}`} label={title.ua} />) }
      {categoriesToPopUp && <CategoriesPopUp categoriesToPopUp={categoriesToPopUp}/>}
    </ul>
  </nav>

CategoriesNav.propTypes = {
  categories: array,
  reference: object,
  categoriesToPopUp: array
}