import React, { useState } from 'react';
import Header from './Header';

const HeaderContainer = () => {
  const [isOpen, setIsOpen] = useState({
    nav: false,
    categories: false
  });

  const onSideMenuToggle = () => setIsOpen(v => ({
    ...v,
    nav: !v.nav
  }));

  const onCategoryMenuToggle = () => setIsOpen(v => ({
    ...v,
    categories: !v.categories
  }));

  return <Header open={isOpen} onSideMenuToggle={onSideMenuToggle} onCategoryMenuToggle={onCategoryMenuToggle} />;
};

export default HeaderContainer; 