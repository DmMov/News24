import 'sass/styles';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import(/* webpackChunkName: 'app' */ './app/App')
  .then(({ default: App }) => 
    render(
      <Router>
        <App />
      </Router>, 
      document.getElementById('app')
    )
  );