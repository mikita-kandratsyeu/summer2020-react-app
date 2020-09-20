import React from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';

import styles from './Profile.module.scss';
import { Button } from '../UI/Button';

const Profile = ({ data: { username, update, access } }) => {
  const history = useHistory();

  const clickHandler = () => {
    update(false);

    localStorage.clear();

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
  data: PropTypes.exact({
    username: PropTypes.string,
    update: PropTypes.func,
    access: PropTypes.string,
  }).isRequired,
};
export default Profile;
