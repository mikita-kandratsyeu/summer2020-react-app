import React from 'react';

import styles from './App.module.scss';

import { Footer, Header, Main } from './components';

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
