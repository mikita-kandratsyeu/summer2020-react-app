import React, { Component } from 'react';
import PropType from 'prop-types';

import { v4 as unique } from 'uuid';
import is from 'is_js';

import { Input } from '../../components/UI/Input';
import { TextArea } from '../../components/UI/TextArea';
import { Button } from '../../components/UI/Button';
import { Select } from '../../components/UI/Select';

import styles from './CardCreationForm.module.scss';

class CardCreationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: unique(),
      isFormValid: false,
      formControls: {
        title: {
          value: '',
          type: 'text',
          name: 'title',
          placeholder: 'Title',
          errorMessage: 'Enter the correct title',
          valid: false,
          touched: false,
          validation: {
            required: true,
            minLength: 6,
          },
        },
        description: {
          value: '',
          name: 'description',
          placeholder: 'Description',
          errorMessage: 'Enter the correct description',
          valid: false,
          touched: false,
          validation: {
            required: true,
            minLength: 6,
          },
        },
        price: {
          value: '',
          type: 'number',
          name: 'price',
          placeholder: 'Price',
          errorMessage: 'Enter the correct price',
          valid: false,
          touched: false,
          validation: {
            required: true,
            minPrice: 0.01,
          },
        },
        currency: {
          value: 'BYN',
          name: 'currency',
          currency: ['BYN', 'USD', 'EUR', 'RUB', 'UAH'],
          valid: true,
        },
        image: {
          value: '',
          type: 'url',
          name: 'image',
          placeholder: 'Image(URL)',
          errorMessage: 'Enter the correct URL',
          valid: false,
          touched: false,
          validation: {
            required: true,
            url: true,
          },
        },
      },
    };
  }

  changeHandler = (e) => {
    const { name } = e.target;

    const { formControls } = this.state;
    const control = formControls[name];

    const isPrice = name === 'price';
    const value = (!isPrice) ? e.target.value : +e.target.value;

    control.value = value;
    control.touched = true;
    control.valid = this.validateControls(value, control.validation);

    formControls[name] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach((item) => {
      isFormValid = formControls[item].valid && isFormValid;
    });

    this.setState({
      isFormValid,
      formControls,
    });
  }

  clickHandler = () => {
    const { updateData } = this.props;

    const uuid = unique();
    this.setState({ id: uuid });

    const {
      id,
      formControls: {
        title, description, price, currency, image,
      },
    } = this.state;

    updateData({
      id,
      title: title.value,
      description: description.value,
      price: price.value,
      currency: currency.value,
      image: image.value,
    });

    this.eraseState();
  }

  submitHandler = (e) => {
    e.preventDefault();
  }

  validateControls = (value, validation) => {
    if (!validation) {
      return true;
    }

    let isValid = true;

    if (validation.required) {
      const val = (!is.number(value)) ? value.trim() : value;
      isValid = val !== '' && isValid;
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }

    if (validation.minPrice) {
      isValid = value >= validation.minPrice && isValid;
    }

    if (validation.url) {
      isValid = is.url(value) && isValid;
    }

    return isValid;
  }

  eraseState = () => {
    this.setState((state) => ({
      isFormValid: false,
      formControls: {
        title: {
          ...state.formControls.title,
          value: '',
        },
        description: {
          ...state.formControls.description,
          value: '',
        },
        price: {
          ...state.formControls.price,
          value: '',
        },
        currency: {
          ...state.formControls.currency,
          value: 'BYN',
        },
        image: {
          ...state.formControls.image,
          value: '',
        },
      },
    }));
  }

  renderControls = (controls) => {
    const {
      title, description, price, currency, image,
    } = controls;

    return (
      <>
        <fieldset>
          <Input
            options={{ name: title.name, placeholder: title.placeholder, type: title.type }}
            validation={{ valid: title.valid, touched: title.touched, message: title.errorMessage }}
            value={title.value}
            onChange={this.changeHandler}
          />
        </fieldset>

        <fieldset>
          <TextArea
            options={{ name: description.name, placeholder: description.placeholder }}
            validation={{
              valid: description.valid,
              touched: description.touched,
              message: description.errorMessage,
            }}
            value={description.value}
            onChange={this.changeHandler}
          />
        </fieldset>

        <fieldset>
          <Input
            options={{ name: price.name, placeholder: price.placeholder, type: price.type }}
            validation={{ valid: price.valid, touched: price.touched, message: price.errorMessage }}
            value={price.value}
            onChange={this.changeHandler}
          />
        </fieldset>

        <fieldset>
          <Select
            options={{ name: currency.name, currency: currency.currency }}
            value={currency.value}
            onChange={this.changeHandler}
          />
        </fieldset>

        <fieldset>
          <Input
            options={{ name: image.name, placeholder: image.placeholder, type: image.type }}
            validation={{ valid: image.valid, touched: image.touched, message: image.errorMessage }}
            value={image.value}
            onChange={this.changeHandler}
          />
        </fieldset>
      </>
    );
  };

  render() {
    const { isFormValid, formControls } = this.state;

    return (
      <form
        className={styles.cardCreationForm}
        onSubmit={this.submitHandler}
      >
        {this.renderControls(formControls)}

        <fieldset>
          <Button
            disabled={!isFormValid}
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
};

export default CardCreationForm;
