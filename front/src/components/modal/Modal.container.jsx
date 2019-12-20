import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

// * Components
import { Modal } from './Modal.view';

const { style } = document.body;

export const ModalContainer = ({ open, ...props }) => {
  useEffect(() => {
    style.overflow = open ? 'hidden' : 'visible';
  }, [open]);

  if (open)
    return createPortal(
      <Modal {...props} />,
      document.body
    );
    
  return null;
}