import React from 'react';
import ASBox from 'components/common/ASBox/ASBox';
import Newsletter from './Sidebar/Newsletter/Newsletter';
import NewsContainer from './News/News.container';

import './Main.sass';

const Main = () =>
  <ASBox>
    <main id="main">
      <NewsContainer />
      <Newsletter/>
    </main>
  </ASBox>

export default Main;