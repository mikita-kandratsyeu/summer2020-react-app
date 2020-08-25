import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';

import './Loader.scss';

const Loader = () => (
  <div className="container">
    <h1><FontAwesomeIcon icon={faApple} /> Apple Shop</h1>
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Loader;
