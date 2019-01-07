import React, { Component } from 'react';

// components
import { getMenuItemById } from '../assets/api';
import Button from '../components/Button';

// styles
import s from '../styles/menuItem.module.css';

export default class MenuDetaile extends Component {
  state = {
    itemMenu: {},
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    console.log(id);
    getMenuItemById(id).then(item =>
      this.setState({
        itemMenu: item,
      }),
    );
  }

  handleGoBack = () => {
    const {
      location: {
        state: { from },
      },
      history,
    } = this.props;
    history.push(from);
  };

  render() {
    const {
      itemMenu: { name, image, price, description, ingredients = [], category },
    } = this.state;

    return (
      <>
        <Button value="назад в меню" onClick={this.handleGoBack} />
        <img src={image} className={s.img} alt={name} />
        <h2>{name}</h2>
        <p>категория: {category}</p>
        <p>
          {' '}
          <span className={s.price}>цена:</span> {price} тугриков
        </p>
        <p>{description}</p>
        <h3>Ингредиенты</h3>
        <ul>
          {ingredients.map(ingredient => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </>
    );
  }
}
