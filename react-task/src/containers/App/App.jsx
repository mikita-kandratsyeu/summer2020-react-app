import React from 'react';

import styles from './App.module.scss';

import { CardContainer } from '../CardContainer';

function App() {
  return (
    <div className={styles.App}>
      <h1>Apple Shop</h1>
      <CardContainer />
    </div>
  );
}

export default App;
