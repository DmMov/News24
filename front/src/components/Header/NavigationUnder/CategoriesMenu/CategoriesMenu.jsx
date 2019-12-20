import React from 'react';
import { array, object } from 'prop-types';

// * Components
import { Link } from 'components/index';
import CategoriesPopUp from './CategoriesPopUp/CategoriesPopUp';

// * Sass
import './CategoriesMenu.sass';

const CategoriesMenu = ({ categories, reference, categoriesToPopUp }) =>
  <nav className="categories-menu" ref={reference}>
    <ul className="links-wrap">
      { categories.map(({ id, title }) => <Link key={id} to={`/${title.en}`} label={title.ua} />) }
      {categoriesToPopUp && <CategoriesPopUp categoriesToPopUp={categoriesToPopUp}/>}
    </ul>
  </nav>

CategoriesMenu.propTypes = {
  categories: array,
  reference: object,
  categoriesToPopUp: array
}

export default CategoriesMenu;