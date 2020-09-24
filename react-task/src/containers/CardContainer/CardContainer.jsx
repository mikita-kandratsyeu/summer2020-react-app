import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchCards, updateState } from '../../store/actions';

import { Card } from '../../components/Card';
import { Loader } from '../../components/UI/Loader';
import { CardCreationForm } from '../CardCreationForm';

import styles from './CardContainer.module.scss';

class CardContainer extends Component {
  componentDidMount() {
    const { fetchCardsFromApi } = this.props;

    fetchCardsFromApi();
  }

  renderCards = (cards, access, loading, remove) => (
    (loading)
      ? <Loader />
      : cards.map((items) => (
        <Card
          key={items.id}
          data={items}
          access={access}
          clickHandler={() => remove(items.id)}
        />
      ))
  );

  render() {
    const {
      cards, access, loading, remove,
    } = this.props;

    return (
      <div className={styles.cardContainer}>
        {
          (access === 'Admin')
            ? <CardCreationForm />
            : null
        }
        {this.renderCards(cards, access, loading, remove)}
      </div>
    );
  }
}

CardContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  access: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchCardsFromApi: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  access: state.auth.access,
  loading: state.cards.loading,
  cards: state.cards.cards,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCardsFromApi: () => dispatch(fetchCards()),
  remove: (idx) => dispatch(updateState(idx)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
