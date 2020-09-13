import React from 'react';
import PropTypes from 'prop-types';

import styles from './Profile.module.scss';

const Profile = ({ username }) => (
  <div className={styles.profile}>
    <h1>Welcome {username}!</h1>
    <p>On this website you can add different Apple electronics</p>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
};
export default Profile;
