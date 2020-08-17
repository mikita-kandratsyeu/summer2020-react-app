import React from 'react';

import CountUp from 'react-countup';

import styles from './Card.module.scss';

const Card = ({ data }) => {
  const dates = {
    ...data,
  };

  return (
    <div className={styles.card}>
      <img src={dates.image} alt={dates.title} />
      <div className={styles.description}>
        <h2>{dates.title}</h2>
        <p>{dates.description}</p>
        <h4>от&nbsp;
          <CountUp
            start={0}
            end={dates.price}
            duraion={2.75}
            decimals={2}
            decimal=","
            suffix={` ${dates.currency}`}
          />
        </h4>
      </div>
    </div>
  );
};

export default Card;
