import React from 'react';
import {
  Router,
  Route,
  hashHistory,
  browserHistory,
  IndexRoute,
} from 'react-router';

import App from 'configs/app';
import Index from 'components/index'
import Mine from 'components/mine'
import DetailsComps from 'components/detailsComps/detailsComps'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="mine" component={Mine} />
    </Route>
    <Route path="detailsComps/:id" component={DetailsComps} />
  </Router>
);

module.exports = routes;
