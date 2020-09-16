import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle as warning } from '@fortawesome/free-solid-svg-icons';

import styles from './TextArea.module.scss';

const isInvalidTextArea = (valid, touched) => !valid && touched;

const TextArea = ({
  options, value, onChange, validation,
}) => {
  const {
    name, placeholder,
  } = options;

  const {
    valid, touched, message,
  } = validation;

  const isInvalid = isInvalidTextArea(valid, touched);

  return (
    <>
      <textarea
        className={`${styles.textArea} ${(isInvalid) ? styles.invalid : null}`}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {
        (isInvalid)
          ? (
            <span className={styles.message}>
              <FontAwesomeIcon className={styles.icon} icon={warning} /> {message}
            </span>
          )
          : null
      }
    </>
  );
};

TextArea.propTypes = {
  options: PropTypes.exact({
    name: PropTypes.string,
    placeholder: PropTypes.string,
  }).isRequired,
  validation: PropTypes.exact({
    valid: PropTypes.bool,
    touched: PropTypes.bool,
    message: PropTypes.string,
  }).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
