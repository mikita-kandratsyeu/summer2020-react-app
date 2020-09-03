import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const isInvalidInput = (valid, touched) => !valid && touched;

const Input = ({
  options, value, onChange, validation,
}) => {
  const {
    name, placeholder, type,
  } = options;

  const {
    valid, touched, message,
  } = validation;

  const isInvalid = isInvalidInput(valid, touched);

  return (
    <>
      <input
        className={`${styles.input} ${(isInvalid) ? styles.invalid : null}`}
        name={name}
        placeholder={placeholder}
        type={type}
        autoComplete="on"
        value={value}
        onChange={onChange}
      />
      {
        (isInvalid)
          ? <span className={styles.message}>{message}</span>
          : null
      }
    </>
  );
};

Input.propTypes = {
  options: PropTypes.exact({
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,

  validation: PropTypes.exact({
    valid: PropTypes.bool,
    touched: PropTypes.bool,
    message: PropTypes.string,
  }).isRequired,

  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
