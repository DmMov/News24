import React from 'react';

import './Modal.style';

const ModalView = ({ children, onClose }) => 
  <div className="modal">
    {children}
    <button className="close-modal btn" onClick={onClose} />
  </div>

export default ModalView;