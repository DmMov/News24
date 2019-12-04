import React from 'react';
import ASBox from 'components/common/ASBox/ASBox';
import NewsContainer from './News/News.container';
import SidebarView from './Sidebar/Sidebar.view';

import './Main.sass';

const Main = () =>
  <ASBox>
    <main id="main">
      <NewsContainer />
      <SidebarView />
    </main>
  </ASBox>

export default Main;