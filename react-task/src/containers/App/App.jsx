import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

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

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
      this.setState({ username: user.username, isAuth: user.token });
    }
  }

  updateAuth = (isAuth, username = '') => {
    this.setState({ isAuth, username });
  }

  render() {
    const { isAuth, username } = this.state;

    let routes = (
      <Switch>
        <Route path="/login">
          <Auth updateAuth={this.updateAuth} />
        </Route>
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
          <Route path="/profile">
            <Profile data={{ username, update: this.updateAuth }} />
          </Route>
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
  }
}

export default App;
