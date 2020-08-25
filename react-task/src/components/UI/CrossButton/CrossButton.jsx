import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './CrossButton.module.scss';

const CrossButton = (props) => {
  const { onClick } = props;

  return (
    <FontAwesomeIcon
      icon={faTimes}
      className={styles.crossButton}
      onClick={onClick}
      title="Remove"
    />
  );
};

export default CrossButton;
