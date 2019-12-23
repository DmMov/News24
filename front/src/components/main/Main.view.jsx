import React from 'react';
import { Route } from 'react-router-dom';

// * Components
import { 
  ContactFormView,
  Sidebar,
  PostsSectionContainer
} from 'components/index';

// * Sass
import './Main.style';

export const Main = () =>
  <div className="container">
    <main id="main">
      <Route exact path="/" component={PostsSectionContainer} />
      <Route path="/contact" component={ContactFormView} />
      <Sidebar />
    </main>
  </div>