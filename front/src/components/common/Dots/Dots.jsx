import React from 'react';
import Dot from './Dot/Dot';
import ASBox from '../ASBox/ASBox';

import './Dots.sass';  
import { array, number, func } from 'prop-types';

const Dots = ({ dots, jumpTo, activeIndex }) =>
  <ASBox>
    <div className="dots">
      {dots.map((_, i)=> <Dot key={i} index={i} jumpTo={() => jumpTo(i)} isActive={i == activeIndex && true} />)}
    </div>
  </ASBox>

Dots.propTypes = {
  dots: array,
  jumpTo: func,
  activeIndex: number
}

export default Dots; 