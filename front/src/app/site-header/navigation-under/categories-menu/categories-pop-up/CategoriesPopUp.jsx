import React from 'react';
import { MoreHorizOutlined } from '@material-ui/icons';
import Link from 'app/common/Link';

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
          categoriesToPopUp.map(({ id, title }) => <Link key={id} to={`/${title}`} label={title} />)
        }
      </ul>
    </nav>
  </div>

CategoriesPopUp.defaultProps = {
  categoriesToPopUp: []
}

export default CategoriesPopUp;