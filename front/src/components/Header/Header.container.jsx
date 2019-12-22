import React, { useState } from 'react';

// * Components
import { Header } from './Header.view';

export const HeaderContainer = () => {
  const [isOpen, setIsOpen] = useState({
    main: false,
    categories: false
  });

  const handleOpen = name => setIsOpen(v => ({
    ...v,
    [name]: !v.nav
  }));

  return <Header 
    open={isOpen} 
    handleMainOpen={() => handleOpen('main')} 
    handleCategoriesOpen={() => handleOpen('categories')} 
  />;
};