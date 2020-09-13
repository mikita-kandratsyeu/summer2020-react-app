import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { PrivateRoute } from '../../components/PrivateRoute';

import { Navigation } from '../../components/Navigation';
import { Auth } from '../Auth';
import { CardContainer } from '../CardContainer';
import { Profile } from '../../components/Profile';
import { Error404 } from '../../components/Error404';

import styles from './App.module.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isAuth: false,
    };
  }

  updateData = (username, isAuth) => {
    this.setState({ username, isAuth });
  }

  render() {
    const { isAuth, username } = this.state;
    return (
      <div className={styles.App}>
        <Navigation isAuth={isAuth} />
        <Switch>
          {
            (isAuth)
              ? <Redirect exact from="/" to="/cards" />
              : <Redirect exact from="/" to="/login" />
          }

          <Route path="/login">
            <Auth updateData={this.updateData} />
          </Route>

          <PrivateRoute path="/cards" auth={isAuth} redirectTo="/login" component={CardContainer} />
          <PrivateRoute path="/profile" auth={isAuth} redirectTo="/login" data={username} component={Profile} />

          <Route path="*" component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
