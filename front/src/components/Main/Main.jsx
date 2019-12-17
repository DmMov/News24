import React from 'react';
import { Route } from 'react-router-dom';
import ASBox from 'components/common/ASBox/ASBox';
import NewsContainer from './News/News.container';
import SidebarView from './Sidebar/Sidebar.view';
import { ContactFormView } from 'components/index';


import './Main.sass';

const Main = () =>
  <ASBox>
    <main id="main">
      <Route exact path="/" component={NewsContainer} />
      <Route path="/contact" component={ContactFormView} />
      <SidebarView />
    </main>
  </ASBox>

export default Main;