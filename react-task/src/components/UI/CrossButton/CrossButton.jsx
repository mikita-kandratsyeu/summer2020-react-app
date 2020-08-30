import React from 'react';
import PropTypes from 'prop-types';

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

CrossButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CrossButton;
