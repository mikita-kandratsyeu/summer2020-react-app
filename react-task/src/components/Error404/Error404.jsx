import React from 'react';
import styles from './Error404.module.scss';

const Error404 = () => (
  <div className={styles.error}>
    <h1>404 Error</h1>
    <p>This page doesn&#39;t exist</p>
    <p>
      Would you like to
      <a
        className={styles.link}
        href="https://www.digitalocean.com/community/tutorials/how-to-troubleshoot-common-http-error-codes"
        target="blank"
      > learn about HTTP errors
      </a>
    </p>
  </div>
);

export default Error404;
