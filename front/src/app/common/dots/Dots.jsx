import React from 'react';
import Dot from './dot/Dot';
import ASBox from '../as-box/ASBox';

import './Dots.sass';  

const Dots = ({ dots, jumpTo, activeIndex }) =>
  <ASBox>
    <div className="dots">
      {dots.map((_, i)=> <Dot key={i} index={i} jumpTo={() => jumpTo(i)} isActive={i == activeIndex && true} />)}
    </div>
  </ASBox>

export default Dots; 