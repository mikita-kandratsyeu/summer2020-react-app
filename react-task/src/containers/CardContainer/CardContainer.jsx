import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

    const cards = JSON.parse(localStorage.getItem('cards'));

    if (!cards) {
      apiCall()
        .then((response) => {
          if (this._isMounted) {
            this.setState({ cards: [...response] });
          }
        })
        .catch((error) => console.log(error.message));
    } else if (this._isMounted) {
      this.setState({ cards: [...cards] });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  updateData = (value) => {
    const { cards } = this.state;

    const data = { cards: [...cards, value] };

    this.setState(data);

    localStorage.setItem('cards', JSON.stringify(data.cards));
  }

  renderCards = (cards, access) => (
    (!cards)
      ? <Loader />
      : cards.map((items) => (
        <Card
          key={items.id}
          data={items}
          access={access}
          clickHandler={() => this.removeData(items.id)}
        />
      ))
  );

  removeData = (idx) => {
    const { cards } = this.state;

    const updateState = cards.filter((item) => item.id !== idx);

    this.setState({ cards: updateState });

    localStorage.setItem('cards', JSON.stringify(updateState));
  }

  render() {
    const { cards } = this.state;
    const { access } = this.props;

    return (
      <div className={styles.cardContainer}>
        {
          (access === 'Admin')
            ? <CardCreationForm updateData={this.updateData} />
            : null
        }
        {this.renderCards(cards, access)}
      </div>
    );
  }
}

CardContainer.propTypes = {
  access: PropTypes.string.isRequired,
};

export default CardContainer;
