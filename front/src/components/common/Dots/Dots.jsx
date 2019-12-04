import React from 'react';
import Dot from './Dot/Dot';
import ASBox from '../ASBox/ASBox';

import './Dots.sass';  
import { array, number, func } from 'prop-types';

const Dots = ({ dots, jumpTo, activeIndex }) =>
  <div className="dots">
    {dots.map((_, i)=> <Dot key={i} index={i} jumpTo={() => jumpTo(i)} isActive={i == activeIndex && true} />)}
  </div>

Dots.propTypes = {
  dots: array,
  jumpTo: func,
  activeIndex: number
}

export default Dots; 