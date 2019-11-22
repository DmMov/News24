import React from 'react';
import Dot from './dot/Dot';
import AlignSectionBox from 'app/align-section-box/AlignSectionBox';

import './Dots.sass';  

const Dots = ({ dots, jumpTo, activeIndex }) =>
  <AlignSectionBox>
    <div className="dots">
      {dots.map((_, i)=> <Dot key={i} index={i} jumpTo={() => jumpTo(i)} isActive={i == activeIndex && true} />)}
    </div>
  </AlignSectionBox>

export default Dots; 