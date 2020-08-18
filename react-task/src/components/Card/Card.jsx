import React from 'react';

import CountUp from 'react-countup';

import styles from './Card.module.scss';

const Card = ({ data }) => {
  const {
    title, description, price, image, currency,
  } = data;

  console.log(title, description, price, image, currency);
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
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
    </div>
  );
};

export default Card;
