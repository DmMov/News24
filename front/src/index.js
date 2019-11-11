import './_fonts';
import './_common.sass';
import './_normalize';
import React from 'react';
import { render } from 'react-dom';

import(/* webpackChunkName: 'app' */ './app/App')
  .then(({ default: App }) => 
    render(
      <App />, 
      document.getElementById('app')
    )
  );