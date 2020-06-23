import React from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';

import LogIn from '../LogIn/index';
import ExamplePageOne from '../Example/index';
import ExamplePageTwo from '../ExampleTwo/index';
import { isLoggedIn } from '../LogIn/components/UserFunction';

const Pages = () => (
  <Switch>
    <Route path="/pages/one" component={ExamplePageOne} />
    <Route path="/pages/two" component={ExamplePageTwo} />
  </Switch>
);

const wrappedRoutes = () => {
  if (!isLoggedIn()) {
    return <Redirect to="/log_in" />;
  }

  return (
    <div>
      <Layout />
      <div className="container__wrap">
        <Route path="/pages" component={Pages} />
      </div>
    </div>
  );
};

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/log_in" component={LogIn} />
        <Route path="/" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);
export default Router;
