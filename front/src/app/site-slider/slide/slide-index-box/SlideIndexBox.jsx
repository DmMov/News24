import React from 'react';

import './SlideIndexBox.sass';

const SlideIndexBox = ({ index }) =>
  <div className="slide-index-box">
    <div className="slide-index">
      <p className="index">{ index }</p>
    </div>
    <p className="slide-index-text">— важливе</p>
  </div>
 

export default SlideIndexBox;