import React from 'react';
import { Route } from 'react-router-dom';

// * Components
import NewsContainer from './News/News.container';
import SidebarView from './Sidebar/Sidebar.view';
import { ContactFormView } from 'components/index';

// * Sass
import './Main.sass';

const Main = () =>
  <main id="main" className="container">
    <Route exact path="/" component={NewsContainer} />
    <Route path="/contact" component={ContactFormView} />
    <SidebarView />
  </main>

export default Main;