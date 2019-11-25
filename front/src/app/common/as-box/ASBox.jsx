import React from 'react';
import { node } from 'prop-types';

import './ASBox.sass';

const ASBox = ({ children }) =>
  <div className="as-box">
    {children}    
  </div>

ASBox.propTypes = {
  children: node
}

export default ASBox;