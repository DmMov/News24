import React from 'react';
import Dot from './dot/Dot';
import ASBox from '../as-box/ASBox';

import './Dots.sass';  
import { array, object, number } from 'prop-types';

const Dots = ({ dots, jumpTo, activeIndex }) =>
  <ASBox>
    <div className="dots">
      {dots.map((_, i)=> <Dot key={i} index={i} jumpTo={() => jumpTo(i)} isActive={i == activeIndex && true} />)}
    </div>
  </ASBox>

Dots.propTypes = {
  dots: array,
  jumpTo: object,
  activeIndex: number
}

export default Dots; 