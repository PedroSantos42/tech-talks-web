import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import PostList from '../pages/PostList';
import Post from '../pages/Post';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/posts" component={PostList} />
    <Route path="/post" component={Post} />
  </Switch>
)

export default Routes;
