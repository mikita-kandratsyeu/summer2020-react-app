import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <a
      className={styles.link}
      href="https://en.wikipedia.org/wiki/Tony_Stark_(Marvel_Cinematic_Universe"
      target="blank"
    >
      About me
    </a>

    <a
      className={styles.link}
      href="https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man"
      target="blank"
    >
      Fandom
    </a>

    <a
      className={styles.link}
      href="https://www.marvel.com/characters/iron-man-tony-stark"
      target="blank"
    >
      Marvel
    </a>
  </footer>
);

export default Footer;
