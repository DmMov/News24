import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import TagsMenu from './TagsMenu';
import { TAGS } from 'const';
import { ResizeSensor } from 'css-element-queries';

const TagsMenuContainer = () => {
  const [tags, setTags] = useState(TAGS);
  const [tagsToMenu, setTagsToMenu] = useState(TAGS);
  
  const ref = useRef({});

  let allTagsWidth = [];

  let iteration = 1;
  const isFitChecking = element => {
    let tagsWidth = 0;
    let isFit = true;
    for (let i = 0; i < element.children.length; i++)
      tagsWidth = tagsWidth + element.children[i].offsetWidth;
    setTagsToMenu(v => {
      if (element.offsetWidth - 20 < tagsWidth) {
        isFit = false;
        return v.filter((t, i) => i != v.length - 1);
      }
      if (element.offsetWidth - 20 > tagsWidth + allTagsWidth[v.length]) {
        isFit = false;
        if (typeof(tags[v.length]) != 'undefined')
          return [...v, tags[v.length]];
      }
      isFit = true;
      return v;
    });
    if (isFit) {
      return;
    }
    else {
      isFitChecking(ref.current.children[0]);
    }
  }
  
  useEffect(() => {
    const currentChildren = ref.current.children[0].children;
    for (let i = 0; i < currentChildren.length; i++)
      allTagsWidth = [...allTagsWidth, currentChildren[i].offsetWidth];
    new ResizeSensor(ref.current, () => isFitChecking(ref.current.children[0]));
  }, [ref]);

  return <TagsMenu tags={tagsToMenu} tagsToPopUp={tags.filter(v => !tagsToMenu.includes(v))} reference={ref} />
};

export default TagsMenuContainer;