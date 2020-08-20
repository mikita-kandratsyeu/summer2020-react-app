import React, { Component } from 'react';

import { apiCall } from '../../api/mockedApi';
import { Card } from '../../components/Card';
import { Loader } from '../../components/UI/Loader';

import styles from './CardContainer.module.scss';

export default class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: null,
    };
  }

  componentDidMount() {
    apiCall().then(
      (value) => this.setState({ cards: [...value] }),
      (error) => console.log(error.message),
    );
  }

  componentWillUnmount() {
    this.setState({ cards: null });
  }

  render() {
    const { cards } = this.state;

    return (
      <div className={styles.cardContainer}>
        {
          (!cards)
            ? <Loader />
            : cards.map((items) => (
              <Card key={items.id} data={items} />
            ))
        }
      </div>
    );
  }
}
