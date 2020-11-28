import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards, updateState } from '../../store/actions';
import { cardsSelector, accessSelector, loadingSelector } from '../../store/selectors';
import { Card } from '../../components/Card';
import { Loader } from '../../components/UI/Loader';
import { CardCreationForm } from '../CardCreationForm';

import styles from './CardContainer.module.scss';

const CardContainer = () => {
  const cards = useSelector(cardsSelector);
  const access = useSelector(accessSelector);
  const loading = useSelector(loadingSelector);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchCards());
  }, []);

  return (
    <div className={styles.cardContainer}>
      {
        (access === 'Admin')
          ? <CardCreationForm />
          : null
      }
      { (loading)
        ? <Loader />
        : cards.map((items) => (
          <Card
            key={items.id}
            data={items}
            access={access}
            clickHandler={() => dispatch(updateState(items.id))}
          />
        ))}
    </div>
  );
};

export default CardContainer;
