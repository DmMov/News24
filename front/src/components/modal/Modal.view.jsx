import React from 'react';

// * Sass
import './Modal.style';

export const Modal = ({ children, onClose }) => 
  <div className="modal">
    {children}
    <button className="close-modal btn" onClick={onClose} />
  </div>