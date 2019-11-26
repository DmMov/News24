import React, { useState, useRef, useEffect } from 'react';
import CategoriesMenu from './CategoriesMenu';
import { CATEGORIES } from 'data-export';
import { ResizeSensor } from 'css-element-queries';

const CategoriesMenuContainer = () => {
  const [categories, setCategories] = useState(CATEGORIES);
  const [categoriesToMenu, setCategoriesToMenu] = useState(CATEGORIES);
  
  const ref = useRef({});

  let allCategoriesWidth = [];

  const isFitChecking = element => {
    const elementChildren = Array.from(element.children); 
    let categoriesWidth = elementChildren.reduce((a, b) => a + b.offsetWidth, 0);
    let isFit = false;
    setCategoriesToMenu(v => {
      if (element.offsetWidth - 20 < categoriesWidth) 
        return v.filter((t, i) => i != v.length - 1);
      if (element.offsetWidth - 20 > categoriesWidth + allCategoriesWidth[v.length])
        if (typeof(categories[v.length]) != 'undefined')
          return v.concat([categories[v.length]]);
      isFit = true;
      return v;
    });
    // if (!isFit)
    //   isFitChecking(element);
  }
  
  useEffect(() => {
    const currentChildren = ref.current.children[0].children;
    for (let i = 0; i < currentChildren.length; i++)
      allCategoriesWidth = [...allCategoriesWidth, currentChildren[i].offsetWidth];
    new ResizeSensor(ref.current, () => isFitChecking(ref.current.children[0]));
  }, []);

  return <CategoriesMenu categories={categoriesToMenu} categoriesToPopUp={categories.filter(v => !categoriesToMenu.includes(v))} reference={ref} />
};

export default CategoriesMenuContainer;