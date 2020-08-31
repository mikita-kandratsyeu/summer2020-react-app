import React from 'react';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import styles from './Select.module.scss';

const Select = ({ options, value, onChange }) => {
  const { name, currency } = options;

  return (
    <select
      className={styles.select}
      name={name}
      value={value}
      onChange={onChange}
    >
      {
        currency.map((item) => (
          <option key={uuidv4()} value={item}>{item}</option>
        ))
      }
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.exact({
    name: PropTypes.string,
    currency: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,

  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
