import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './CrossButton.module.scss';

const CrossButton = (props) => {
  const { clickHandler } = props;

  return (
    <FontAwesomeIcon
      icon={faTimes}
      className={styles.crossButton}
      onClick={clickHandler}
      title="Remove"
    />
  );
};

export default CrossButton;
