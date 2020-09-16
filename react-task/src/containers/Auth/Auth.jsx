import React, { Component } from 'react';
import PropType from 'prop-types';

import { withRouter } from 'react-router-dom';

import { Input } from '../../components/UI/Input';
import { Button } from '../../components/UI/Button';

import styles from './Auth.module.scss';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormValid: false,
      formControls: {
        username: {
          value: '',
          type: 'text',
          name: 'username',
          placeholder: 'Username',
          errorMessage: 'Enter the correct username',
          valid: false,
          touched: false,
          validation: {
            required: true,
            minLength: 4,
          },
        },
        password: {
          value: '',
          type: 'password',
          name: 'password',
          placeholder: 'Password',
          errorMessage: 'Enter the correct password',
          valid: false,
          touched: false,
          validation: {
            required: true,
            minLength: 6,
          },
        },
      },
    };
  }

  changeHandler = (e) => {
    const { name } = e.target;

    const { formControls } = this.state;
    const control = formControls[name];

    const isPrice = name === 'price';
    const value = (!isPrice) ? e.target.value : +e.target.value;

    control.value = value;
    control.touched = true;
    control.valid = this.validateControls(value, control.validation);

    formControls[name] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach((item) => {
      isFormValid = formControls[item].valid && isFormValid;
    });

    this.setState({
      isFormValid,
      formControls,
    });
  }

  clickHandler = () => {
    const { isFormValid, formControls: { username } } = this.state;

    const { history } = this.props;

    const { updateAuth } = this.props;

    const { from } = { from: { pathname: '/' } };

    localStorage.setItem('user', JSON.stringify({ token: isFormValid, username: username.value }));
    updateAuth(isFormValid, username.value);

    history.replace(from);

    this.eraseState();
  }

  submitHandler = (e) => {
    e.preventDefault();
  }

  validateControls = (value, validation) => {
    if (!validation) {
      return true;
    }

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }

    return isValid;
  }

  eraseState = () => {
    this.setState((state) => ({
      isFormValid: false,
      formControls: {
        username: {
          ...state.formControls.username,
          value: '',
        },
        password: {
          ...state.formControls.password,
          value: '',
        },
      },
    }));
  }

  renderControls = (controls) => {
    const {
      username, password,
    } = controls;

    return (
      <>
        <fieldset>
          <Input
            options={{
              name: username.name,
              placeholder: username.placeholder,
              type: username.type,
            }}
            validation={{
              valid: username.valid,
              touched: username.touched,
              message: username.errorMessage,
            }}
            value={username.value}
            onChange={this.changeHandler}
          />
        </fieldset>

        <fieldset>
          <Input
            options={{
              name: password.name,
              placeholder: password.placeholder,
              type: password.type,
            }}
            validation={{
              valid: password.valid,
              touched: password.touched,
              message: password.errorMessage,
            }}
            value={password.value}
            onChange={this.changeHandler}
          />
        </fieldset>
      </>
    );
  }

  render() {
    const { isFormValid, formControls } = this.state;

    return (
      <form
        className={styles.auth}
        onSubmit={this.submitHandler}
      >
        {this.renderControls(formControls)}

        <fieldset>
          <Button
            disabled={!isFormValid}
            value="Login"
            onClick={this.clickHandler}
          />
        </fieldset>
      </form>
    );
  }
}

Auth.propTypes = {
  updateAuth: PropType.func.isRequired,
  history: PropType.shape({
    replace: PropType.func.isRequired,
  }).isRequired,
};

export default withRouter(Auth);
