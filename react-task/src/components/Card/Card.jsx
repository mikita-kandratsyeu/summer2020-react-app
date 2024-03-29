import React from 'react';
import PropTypes from 'prop-types';

import CountUp from 'react-countup';
import { CrossButton } from '../UI/CrossButton';

import styles from './Card.module.scss';

const Card = (props) => {
  const {
    data: {
      title, description, price, image, currency,
    },
    access,
    clickHandler,
  } = props;

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
      {
        (access === 'Admin')
          ? <CrossButton onClick={clickHandler} />
          : null
      }
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  access: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Card;
