import React from 'react';
import Link from 'app/common/Link';
import { TAGS } from 'constants/fake-data';

import './TagsMenu.sass';

const TagsMenu = () =>
  <nav id="tags-menu">
    <ul className="links-wrap">
      { TAGS.map(({ id, title }) => <Link key={id} to={`/${title}`} label={title} />) }
    </ul>
  </nav>

export default TagsMenu;