import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authTokenSelector } from '../../store/selectors';
import { autoLogin } from '../../store/actions';
import { Navigation } from '../../components/Navigation';
import { Auth } from '../Auth';
import { CardContainer } from '../CardContainer';
import { Profile } from '../../components/Profile';
import { Error404 } from '../../components/Error404';

import styles from './App.module.scss';

const App = () => {
  const isAuth = useSelector(authTokenSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, []);

  let routes = (
    <Switch>
      <Route path="/login" component={Auth} />
      <Redirect from="/cards" to="/" />
      <Redirect from="/profile" to="/" />
      <Redirect exact from="/" to="/login" />
      <Route path="*" component={Error404} />
    </Switch>
  );

  if (isAuth) {
    routes = (
      <Switch>
        <Route path="/cards" component={CardContainer} />
        <Route path="/profile" component={Profile} />
        <Redirect from="/login" to="/" />
        <Redirect exact from="/" to="/cards" />
        <Route path="*" component={Error404} />
      </Switch>
    );
  }

  return (
    <div className={styles.App}>
      <Navigation isAuth={isAuth} />
      {routes}
    </div>
  );
};

export default App;
