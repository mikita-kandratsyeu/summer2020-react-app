import React from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';

import styles from './Profile.module.scss';
import { Button } from '../UI/Button';

const Profile = ({ data: { username, update } }) => {
  const history = useHistory();

  const clickHandler = () => {
    update(false);

    localStorage.clear();

    history.push('/');
  };

  return (
    <div className={styles.profile}>
      <h1>Welcome {username}!</h1>
      <p>On this website you can add different Apple electronics</p>
      <Button value="Logout" onClick={clickHandler} disabled={false} />
    </div>
  );
};

Profile.propTypes = {
  data: PropTypes.exact({
    username: PropTypes.string,
    update: PropTypes.func,
  }).isRequired,
};
export default Profile;
