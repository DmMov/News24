import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import TagsMenu from './TagsMenu';
import { TAGS } from 'const';
import { ResizeSensor } from 'css-element-queries';

const TagsMenuContainer = () => {
  const [tags, setTags] = useState(TAGS);
  const [tagsToMenu, setTagsToMenu] = useState(TAGS);
  
  const ref = useRef({});

  let allTagsWidth = [];

  const isFitting = element => {
    let tagsWidth = 0;
    let elementLiChildren = [];
    for (let i = 0; i < element.children.length; i++) {
      tagsWidth = tagsWidth + element.children[i].offsetWidth;
      elementLiChildren = element.children[i].localName == 'li' ? [...elementLiChildren, element.children[i]] : elementLiChildren;
    }

    if (element.offsetWidth - 20 < tagsWidth) {
      setTagsToMenu(v => v.filter((t, i) => i != v.length - 1));
      return;
    }
    if (element.offsetWidth - 20 > tagsWidth + allTagsWidth[elementLiChildren.length]) {
      setTagsToMenu(v => typeof(tags[v.length]) != 'undefined' ? [...v, tags[v.length]] : v)
      return;
    }
  }
  
  useEffect(() => {
    const currentChildren = ref.current.children[0].children;
    for (let i = 0; i < currentChildren.length; i++)
      allTagsWidth = [...allTagsWidth, currentChildren[i].offsetWidth];

    isFitting(ref.current.children[0]);

    new ResizeSensor(ref.current, () => isFitting(ref.current.children[0]));
  }, [ref]);

  return <TagsMenu tags={tagsToMenu} tagsToPopUp={tags.filter(v => !tagsToMenu.includes(v))} reference={ref} />
};

export default TagsMenuContainer;