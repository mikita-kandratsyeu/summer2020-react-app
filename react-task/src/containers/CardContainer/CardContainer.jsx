import React, { Component } from 'react';

import { apiCall } from '../../api/mockedApi';
import { Card } from '../../components/Card';
import { Loader } from '../../components/UI/Loader';
import { CardCreationForm } from '../CardCreationForm';

import styles from './CardContainer.module.scss';

export default class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: null,
      isLoad: false,
    };
  }

  componentDidMount() {
    apiCall().then(
      (value) => this.setState({ cards: [...value], isLoad: true }),
      (error) => console.log(error.message),
    );
  }

  componentWillUnmount() {
    this.setState({ cards: null, isLoad: false });
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
    const { cards, isLoad } = this.state;
    return (
      <div className={styles.cardContainer}>
        <CardCreationForm updateData={this.updateData} isLoad={isLoad} />
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
