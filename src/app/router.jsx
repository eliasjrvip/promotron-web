import React from 'react';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import { useAuth } from './authContext';
import Login from '../login';
import Dashboard from '../dashboard';
import { Welcome, Work, Home, Performance } from '../dashboard/pages/welcomePages';

function Router() {
  const { user } = useAuth();

  const PrivateRoute = ({ component, path }) => {
    if (user) {
      return <Route path={path} component={component} />;
    }
    return <Redirect to="/login" />;
  };

  function findFirstPath() {
    let path = '/login';

    if (user) {
      if (user.firstLogin) {
        path = '/welcome';
      } else {
        path = '/dashboard';
      }
    }
    return <Redirect to={path} />;
  }

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          {findFirstPath()}
        </Route>
        <Route path="/login">{user ? <Redirect to="/dashboard" /> : <Login />}</Route>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/welcome" component={Welcome} />
        <PrivateRoute path="/work" component={Work} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/perfomanceAnalysis" component={Performance} />
      </Switch>
    </HashRouter>
  );
}

export default Router;
