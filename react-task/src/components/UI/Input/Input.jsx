import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const Input = ({ options, value, onChange }) => {
  const {
    name, placeholder, type,
  } = options;

  return (
    <input
      className={styles.input}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  options: PropTypes.exact({
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,

  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
