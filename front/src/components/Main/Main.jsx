import React from 'react';

import './Main.sass';
import ASBox from 'components/common/ASBox/ASBox';
import News from './News/News';
import Newsletter from './Sidebar/Newsletter/Newsletter';
import { NEWS } from 'data/content-data';

const Main = () =>
  <ASBox>
    <main id="main">
      <News news={NEWS}/>
      <Newsletter/>
    </main>
  </ASBox>

export default Main;