import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Base from './containers/Base/Base';
import Board from './containers/Board/Board';
import Layout from './containers/Layout';
import Welcome from './containers/Welcome';

export const urls = {
  index: '/',
  trelloBoard: '/trello'
};

export const routes = (
  <Route path={urls.index} component={Layout}>
    <IndexRoute component={Welcome} />

    <Route path={urls.trelloBoard} component={Base}>
      <IndexRoute component={Board} />
    </Route>
  </Route>
);
