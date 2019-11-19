import React from 'react';
import Link from 'app/common/Link';

import './TagsMenu.sass';
import TagsPopUp from './tags-pop-up/TagsPopUp';

const TagsMenu = ({ tags, reference, tagsToPopUp }) =>
  <nav id="tags-menu" ref={reference}>
    <ul className="links-wrap">
      { tags.map(({ id, title }) => <Link key={id} to={`/${title}`} label={title} />) }
      <TagsPopUp tagsToPopUp={tagsToPopUp}/>
    </ul>
  </nav>

export default TagsMenu;