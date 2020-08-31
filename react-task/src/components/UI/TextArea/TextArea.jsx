import React from 'react';
import PropTypes from 'prop-types';

import styles from './TextArea.module.scss';

const TextArea = ({ options, value, onChange }) => {
  const {
    name, placeholder,
  } = options;

  return (
    <textarea
      className={styles.textArea}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

TextArea.propTypes = {
  options: PropTypes.exact({
    name: PropTypes.string,
    placeholder: PropTypes.string,
  }).isRequired,

  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
