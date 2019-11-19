import React from 'react';
import { MoreHorizOutlined } from '@material-ui/icons';
import Link from 'app/common/Link';

import './TagsPopUp.sass';

const TagsPopUp = ({ tagsToPopUp }) =>
  tagsToPopUp.length != 0 &&
  <div id="tags-pop-up">
    <button className="pop-up-btn">
      <MoreHorizOutlined className="dots-icon" />
    </button>
    <nav className="pop-up">
      <ul className="links-wrap">
        {
          tagsToPopUp.map(({ id, title }) => <Link key={id} to={`/${title}`} label={title} />)
        }
      </ul>
    </nav>
  </div>

TagsPopUp.defaultProps = {
  tagsToPopUp: []
}

export default TagsPopUp;