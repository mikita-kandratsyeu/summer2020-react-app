import React, { Component } from 'react';

import { apiCall } from '../../api/mockedApi';
import { Card } from '../../components/Card';
import { Loader } from '../../components/UI/Loader';
import { CardCreationForm } from '../CardCreationForm';

import styles from './CardContainer.module.scss';

class CardContainer extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      cards: null,
    };
  }

  componentDidMount() {
    this._isMounted = true;

    apiCall()
      .then((response) => {
        if (this._isMounted) {
          this.setState({ cards: [...response] });
        }
      })
      .catch((error) => console.log(error.message));
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  updateData = (value) => {
    const { cards } = this.state;

    this.setState({ cards: [...cards, value] });
  }

  removeData = (idx) => {
    const { cards } = this.state;

    const updateState = cards.filter((item) => item.id !== idx);

    this.setState({ cards: updateState });
  }

  render() {
    const { cards } = this.state;
    return (
      <div className={styles.cardContainer}>
        <CardCreationForm updateData={this.updateData} />
        {
          (!cards)
            ? <Loader />
            : cards.map((items) => (
              <Card key={items.id} data={items} clickHandler={() => this.removeData(items.id)} />
            ))
        }
      </div>
    );
  }
}

export default CardContainer;
