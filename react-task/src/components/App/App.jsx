import React from 'react';

import styles from './App.module.scss';

import { Footer } from '../Footer';
import { Header } from '../Header';
import { Main } from '../Main';

function App({ userData }) {
  return (
    <div className={styles.App}>
      <Header />
      <Main data={userData} />
      <Footer />
    </div>
  );
}

export default App;
