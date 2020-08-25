import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './CloseButton.module.scss';

const CloseButton = (props) => {
  const { onClick } = props;

  return (
    <FontAwesomeIcon
      icon={faTimes}
      className={styles.closeButton}
      onClick={onClick}
    />
  );
};

export default CloseButton;
