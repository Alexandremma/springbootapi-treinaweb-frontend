import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Profile from './pages/Profile';
import Register from './pages/Register';

// import { Container } from './styles';

export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Profile} />
            <Route path="/register" component={Register} />
        </Switch>
    </BrowserRouter>
  );
}
