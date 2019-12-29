import React from 'react';

// * Sass
import './IndexBox.style';

export const IndexBox = ({ index, text }) =>
  <div className="index-box">
    <div className="index-square">
      <p className="index">{index}</p>
    </div>
    <p className="index-box-text">— {text}</p>
  </div>