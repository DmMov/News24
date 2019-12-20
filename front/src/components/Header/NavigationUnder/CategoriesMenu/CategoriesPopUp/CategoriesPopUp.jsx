import React from 'react';
import { array } from 'prop-types';
import { MoreHorizOutlined } from '@material-ui/icons';

// * Components
import { Link } from 'components/index';

// * Sass
import './CategoriesPopUp.sass';

const CategoriesPopUp = ({ categoriesToPopUp }) =>
  categoriesToPopUp.length != 0 &&
  <div id="categories-pop-up">
    <button className="pop-up-btn">
      <MoreHorizOutlined className="dots-icon" />
    </button>
    <nav className="pop-up">
      <ul className="links-wrap">
        {
          categoriesToPopUp.map(({ id, title }) => <Link key={id} to={`/${title.en}`} label={title.ua} />)
        }
      </ul>
    </nav>
  </div>

CategoriesPopUp.defaultProps = {
  categoriesToPopUp: []
}

CategoriesPopUp.propTypes = {
  categoriesToPopUp: array
}

export default CategoriesPopUp;