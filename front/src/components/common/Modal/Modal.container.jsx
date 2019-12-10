import React from 'react';
import { createPortal } from 'react-dom';
import ModalView from './Modal.view';

const { style } = document.body;

const ModalContainer = ({ open, ...props }) => {
  if (open) {
    style.overflow = 'hidden';
    return createPortal(
      <ModalView {...props} />,
      document.body
    );
  }
  style.overflow = 'visible';
  return null;
}

export default ModalContainer;