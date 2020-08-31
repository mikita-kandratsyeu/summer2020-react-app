import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ disabled, value, onClick }) => (
  <button
    className={styles.button}
    type="button"
    disabled={disabled}
    onClick={onClick}
  >
    {value}
  </button>
);

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
