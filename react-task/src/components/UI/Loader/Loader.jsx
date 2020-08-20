import React from 'react';

import styles from './Loader.module.scss';

const Loader = () => (
  <div className={styles.center}>
    <div className={styles.loader}>
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Loader;
