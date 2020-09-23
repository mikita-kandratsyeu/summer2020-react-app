import React from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { logout } from '../../store/actions';

import styles from './Profile.module.scss';
import { Button } from '../UI/Button';

const Profile = (props) => {
  const history = useHistory();

  const { username, access } = props;

  const clickHandler = () => {
    const { signOut } = props;

    signOut();

    history.push('/');
  };

  return (
    <div className={styles.profile}>
      <h1>Welcome {username}! You&#39;re {access}</h1>
      <p>On this website you can&nbsp;
        {(access === 'Admin') ? <strong>add and remove</strong> : <strong>view</strong>}
        &nbsp;Apple electronics
      </p>
      <Button value="Logout" onClick={clickHandler} disabled={false} />
    </div>
  );
};

Profile.propTypes = {
  signOut: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  access: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  username: state.auth.username,
  access: state.auth.access,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
