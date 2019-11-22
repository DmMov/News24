import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import CategoriesMenu from './categoriesMenu';
import { CATEGORIES } from 'data-export';
import { ResizeSensor } from 'css-element-queries';

const CategoriesMenuContainer = () => {
  const [categories, setCategories] = useState(CATEGORIES);
  const [categoriesToMenu, setCategoriesToMenu] = useState(CATEGORIES);
  
  const ref = useRef({});

  let allCategoriesWidth = [];

  const isFitChecking = element => {
    let categoriesWidth = 0;
    let isFit = true;
    for (let i = 0; i < element.children.length; i++)
      categoriesWidth = categoriesWidth + element.children[i].offsetWidth;
    setCategoriesToMenu(v => {
      if (element.offsetWidth - 20 < categoriesWidth) {
        isFit = false;
        return v.filter((t, i) => i != v.length - 1);
      }
      if (element.offsetWidth - 20 > categoriesWidth + allCategoriesWidth[v.length]) {
        isFit = false;
        if (typeof(categories[v.length]) != 'undefined')
          return [...v, categories[v.length]];
      }
      isFit = true;
      return v;
    });
    if (isFit)
      return;
    else
      isFitChecking(ref.current.children[0]);
  }
  
  useEffect(() => {
    const currentChildren = ref.current.children[0].children;
    for (let i = 0; i < currentChildren.length; i++)
      allCategoriesWidth = [...allCategoriesWidth, currentChildren[i].offsetWidth];
    new ResizeSensor(ref.current, () => isFitChecking(ref.current.children[0]));
  }, [ref]);

  return <CategoriesMenu categories={categoriesToMenu} categoriesToPopUp={categories.filter(v => !categoriesToMenu.includes(v))} reference={ref} />
};

export default CategoriesMenuContainer;