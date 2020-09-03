import React from 'react';
import PropTypes from 'prop-types';

import styles from './Main.module.scss';

function Main(props) {
  const {
    data:
      {
        user: { firstName, lastName },
        avatar: { image, alt },
      },
  } = props;

  return (
    <main className={styles.main}>
      <img className={styles.image} src={image} alt={alt} />
      <h2 className={styles.user}>{firstName} {lastName}</h2>
    </main>
  );
}

Main.propTypes = {
  data: PropTypes.exact({
    user: PropTypes.objectOf(PropTypes.string),
    avatar: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};

export default Main;
