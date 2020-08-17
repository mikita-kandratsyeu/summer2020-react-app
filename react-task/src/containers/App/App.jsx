import React from 'react';

import { CardContainer } from '../CardContainer';

import styles from './App.module.scss';

const App = () => (
  <div className={styles.App}>
    <h1>Apple Shop</h1>
    <CardContainer />
  </div>
);

export default App;
