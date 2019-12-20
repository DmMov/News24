import React from 'react';
import { array, number, func } from 'prop-types';
import Dot from './Dot/Dot';

import './Dots.sass';  

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