import React, { useState } from 'react';
import Header from './Header';

const HeaderContainer = () => {
  const [isOpen, setIsOpen] = useState({
    main: false,
    tag: false
  });

  const onSideMenuToggle = () => setIsOpen(v => ({
    ...v,
    main: !v.main
  }));

  return <Header open={isOpen} onSideMenuToggle={onSideMenuToggle} />;
};

export default HeaderContainer; 