import React from 'react';
import { Route } from 'react-router-dom';

// * Components
import NewsContainer from './News/News.container';
import SidebarView from './Sidebar/Sidebar.view';
import { ContactFormView } from 'components/index';

// * Sass
import './Main.sass';

const Main = () =>
  <div className="container">
    <main id="main">
      <Route exact path="/" component={NewsContainer} />
      <Route path="/contact" component={ContactFormView} />
      <SidebarView />
    </main>
  </div>

export default Main;