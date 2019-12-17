import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import ModalView from './Modal.view';

const { style } = document.body;

const ModalContainer = ({ open, ...props }) => {
  useEffect(() => {
    style.overflow = open ? 'hidden' : 'visible';
  }, [open]);

  if (open)
    return createPortal(
      <ModalView {...props} />,
      document.body
    );
    
  return null;
}

export default ModalContainer;