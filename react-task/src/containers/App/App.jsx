import React, { Component } from 'react';
import PropType from 'prop-types';

import { Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { autoLogin } from '../../store/actions';

import { Navigation } from '../../components/Navigation';
import { Auth } from '../Auth';
import { CardContainer } from '../CardContainer';
import { Profile } from '../../components/Profile';
import { Error404 } from '../../components/Error404';

import styles from './App.module.scss';

class App extends Component {
  componentDidMount() {
    const { checkAuth } = this.props;

    checkAuth();
  }

  render() {
    const { isAuth } = this.props;

    let routes = (
      <Switch>
        <Route path="/login">
          <Auth />
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
  }
}

App.propTypes = {
  checkAuth: PropType.func.isRequired,
  isAuth: PropType.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: !!state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  checkAuth: () => dispatch(autoLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
