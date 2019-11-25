import React from 'react';
import Link from 'app/common/Link';

import './CategoriesMenu.sass';
import CategoriesPopUp from './categories-pop-up/CategoriesPopUp';
import { array, object } from 'prop-types';

const CategoriesMenu = ({ categories, reference, categoriesToPopUp }) =>
  <nav id="categories-menu" ref={reference}>
    <ul className="links-wrap">
      { categories.map(({ id, title }) => <Link key={id} to={`/${title.en}`} label={title.ua} />) }
      <CategoriesPopUp categoriesToPopUp={categoriesToPopUp}/>
    </ul>
  </nav>

CategoriesMenu.propTypes = {
  categories: array,
  reference: object,
  categoriesToPopUp: array
}

export default CategoriesMenu;