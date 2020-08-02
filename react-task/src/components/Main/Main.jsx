import React from 'react';

import styles from './Main.module.scss';

function Main({ data: { user, avatar } }) {
  return (
    <main className={styles.main}>
      <img className={styles.image} src={avatar.image} alt={avatar.alt} />
      <h2 className={styles.user}>{user.firstName} {user.lastName}</h2>
    </main>
  );
}

export default Main;
