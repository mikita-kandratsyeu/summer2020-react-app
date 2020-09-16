import React from 'react';
import PropTypes from 'prop-types';

import { v4 as uuid } from 'uuid';

import styles from './Select.module.scss';

const Select = ({ options, value, onChange }) => {
  const { name, array } = options;

  return (
    <select
      className={styles.select}
      name={name}
      value={value}
      onChange={onChange}
    >
      {
        array.map((item) => (
          <option key={uuid()} value={item}>{item}</option>
        ))
      }
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.exact({
    name: PropTypes.string,
    array: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
