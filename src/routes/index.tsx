import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import Posts from '../pages/Posts';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/posts" exact component={Posts} />
  </Switch>
)

export default Routes;
