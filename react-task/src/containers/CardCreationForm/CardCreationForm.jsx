import React, { Component } from 'react';
import PropType from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import styles from './CardCreationForm.module.scss';

class CardCreationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuidv4(),
      title: 'Смартфон Apple iPhone 11 64GB (черный)',
      description: 'Apple iOS, экран 6.1" IPS (828x1792), Apple A13 Bionic, '
        + 'ОЗУ 4 ГБ, флэш-память 64 ГБ, камера 12 Мп, аккумулятор 3046 мАч, 1 SIM',
      price: '1950.00',
      currency: '',
      image: 'https://content2.onliner.by/catalog/device/header/e2189f90f9088975c553ec33431fc186.jpeg',
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  clickHandler = (e) => {
    e.preventDefault();

    const { updateData } = this.props;

    const id = uuidv4();
    this.setState({ id });

    updateData(this.state);
  }

  render() {
    const {
      title, description, price, image,
    } = this.state;

    const { isLoad } = this.props;

    return (
      <form className={styles.cardCreationForm}>
        <fieldset>
          <input
            name="title"
            placeholder="Title"
            type="text"
            value={title}
            onChange={this.changeHandler}
          />
        </fieldset>

        <fieldset>
          <textarea
            name="description"
            placeholder="Description"
            value={description}
            onChange={this.changeHandler}
          />
        </fieldset>

        <fieldset>
          <input
            name="price"
            placeholder="Price"
            type="number"
            value={price}
            onChange={this.changeHandler}
          />
        </fieldset>

        <fieldset>
          <select
            name="currency"
            onChange={this.changeHandler}
          >
            <option value="">Choose a currency</option>
            <option value="BYN">BYN</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="RUB">RUB</option>
            <option value="UAH">UAH</option>
          </select>
        </fieldset>

        <fieldset>
          <input
            name="image"
            placeholder="Image(URL)"
            type="url"
            value={image}
            onChange={this.changeHandler}
          />
        </fieldset>

        <fieldset>
          <button
            type="submit"
            disabled={!isLoad}
            onClick={this.clickHandler}
          >
            Add card
          </button>
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
