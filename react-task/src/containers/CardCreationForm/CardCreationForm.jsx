import React, { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';

import styles from './CardCreationForm.module.scss';

export default class CardCreationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      description: '',
      price: '',
      currency: '',
      image: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {
      title, description, price, image,
    } = this.state;

    return (
      <form className={styles.cardCreationForm}>
        <h2>Add Product</h2>
        <fieldset>
          <input
            name="title"
            placeholder="Title"
            type="text"
            required
            value={title}
            onChange={this.handleChange}
          />
        </fieldset>

        <fieldset>
          <textarea
            name="description"
            placeholder="Description"
            required
            value={description}
            onChange={this.handleChange}
          />
        </fieldset>

        <fieldset>
          <input
            name="price"
            placeholder="Price"
            type="number"
            required
            value={price}
            onChange={this.handleChange}
          />
        </fieldset>

        <fieldset>
          <select
            name="currency"
            onChange={this.handleChange}
          >
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
            type="text"
            required
            value={image}
            onChange={this.handleChange}
          />
        </fieldset>

        <fieldset>
          <button type="submit">Add card</button>
        </fieldset>
      </form>
    );
  }
}
