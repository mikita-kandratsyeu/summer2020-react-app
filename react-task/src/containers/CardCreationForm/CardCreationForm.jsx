import React, { Component } from 'react';
import PropType from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import { Input } from '../../components/UI/Input';
import { TextArea } from '../../components/UI/TextArea';
import { Button } from '../../components/UI/Button';
import { Select } from '../../components/UI/Select';

import styles from './CardCreationForm.module.scss';

class CardCreationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {
        id: uuidv4(),
        title: 'Смартфон Apple iPhone 11 64GB (черный)',
        description: 'Apple iOS, экран 6.1" IPS (828x1792), Apple A13 Bionic, '
          + 'ОЗУ 4 ГБ, флэш-память 64 ГБ, камера 12 Мп, аккумулятор 3046 мАч, 1 SIM',
        price: 699,
        currency: 'USD',
        image: 'https://content2.onliner.by/catalog/device/header/e2189f90f9088975c553ec33431fc186.jpeg',
      },
      errors: {
        title: '',
        description: '',
        price: '',
        image: '',
      },
    };
  }

  changeHandler = (e) => {
    const { name } = e.target;

    const isPrice = name === 'price';

    const value = (!isPrice) ? e.target.value : +e.target.value;

    this.setState((state) => ({
      card: {
        ...state.card,
        [name]: value,
      },
    }));
  }

  clickHandler = () => {
    const { updateData } = this.props;

    const id = uuidv4();

    this.setState({
      card: { id },
    });

    const { card } = this.state;

    updateData(card);

    this.eraseState();
  }

  eraseState() {
    this.setState((state) => ({
      card: {
        ...state.card,
        title: '',
        description: '',
        price: '',
        currency: 'BYN',
        image: '',
      },
    }));
  }

  // TODO: Add validators for Inputs

  render() {
    const {
      card: {
        title, description, price, image, currency,
      },
    } = this.state;

    const { isLoad } = this.props;

    return (
      <form className={styles.cardCreationForm}>
        <fieldset>
          <Input
            options={{ name: 'title', placeholder: 'Title', type: 'text' }}
            value={title}
            onChange={this.changeHandler}
          />
        </fieldset>

        <fieldset>
          <TextArea
            options={{ name: 'description', placeholder: 'Description' }}
            value={description}
            onChange={this.changeHandler}
          />
        </fieldset>

        <fieldset>
          <Input
            options={{ name: 'price', placeholder: 'Price', type: 'text' }}
            value={price}
            onChange={this.changeHandler}
          />
        </fieldset>

        <fieldset>
          <Select
            options={{ name: 'currency', currency: ['BYN', 'USD', 'EUR', 'RUB', 'UAH'] }}
            value={currency}
            onChange={this.changeHandler}
          />
        </fieldset>

        <fieldset>
          <Input
            options={{ name: 'image', placeholder: 'Image(URL)', type: 'url' }}
            value={image}
            onChange={this.changeHandler}
          />
        </fieldset>

        <fieldset>
          <Button
            disabled={!isLoad}
            value="Add card"
            onClick={this.clickHandler}
          />
        </fieldset>
      </form>
    );
  }
}

CardCreationForm.propTypes = {
  updateData: PropType.func.isRequired,
  isLoad: PropType.bool.isRequired,
};

export default CardCreationForm;
