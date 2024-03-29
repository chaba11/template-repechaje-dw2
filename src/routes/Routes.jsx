import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App';
import NavBar from '../components/NavBar';
import About from '../pages/About';
import NavRouter from './NavRouter';

const Routes = () => (
  <Switch>
    <NavRouter path="/about">
      <About />
    </NavRouter>
    <Route path="/:userId">
      <NavBar />
      <App />
    </Route>
  </Switch>
);

export default Routes;
