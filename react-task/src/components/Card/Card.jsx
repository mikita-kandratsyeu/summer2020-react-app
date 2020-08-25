import React from 'react';

import CountUp from 'react-countup';

import { CrossButton } from '../UI/CrossButton';

import styles from './Card.module.scss';

const Card = ({ data }) => {
  const {
    title, description, price, image, currency,
  } = data;

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.description}>
        <h2>{title}</h2>
        <p>{description}</p>
        <h4>от&nbsp;
          <CountUp
            start={0}
            end={price}
            duraion={2.75}
            decimals={2}
            decimal=","
            suffix={` ${currency}`}
          />
        </h4>
      </div>
      <CrossButton />
    </div>
  );
};

export default Card;
