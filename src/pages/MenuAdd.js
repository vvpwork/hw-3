import React, { Component } from 'react';
import { postItemMenu, getCategories } from '../assets/api';

// components
import CategorySelector from '../components/CategorySelector';
import Button from '../components/Button';

// styles
import s from '../styles/menuAdd.module.css';

export default class AddMenu extends Component {
  state = {
    name: '',
    description: '',
    image: '',
    category: '',
    ingredients: '',
    price: '',
    categories: [],
  };

  componentDidMount() {
    getCategories().then(allCAtegories =>
      this.setState({
        categories: allCAtegories,
      }),
    );
  }

  handleChangeInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = ev => {
    ev.preventDefault();
    const arrIngredients = ingredinet => ingredinet.split(' ');
    const {
      name,
      description,
      image,
      category,
      ingredients,
      price,
    } = this.state;
    const {
      history,
      location: {
        state: { from },
      },
    } = this.props;
    const itemMenu = {
      name,
      description,
      image,
      category,
      ingredients: arrIngredients(ingredients),
      price,
    };
    postItemMenu(itemMenu).then(newItem => console.log(newItem));
    history.push(from);
  };

  render() {
    const {
      name,
      description,
      image,
      categories,
      ingredients,
      price,
    } = this.state;
    return (
      <>
        <h1>Add New Menu Item Page</h1>
        <form className={s.form}>
          <label htmlFor="name">
            <span>Введите имя</span>
            <input
              id="name"
              name="name"
              value={name}
              type="text"
              onChange={this.handleChangeInput}
              placeholder="введите название блюда"
            />
          </label>
          <label htmlFor="description">
            <span>Описание блюда</span>
            <textarea
              name="description"
              id="description"
              value={description}
              type="text"
              onChange={this.handleChangeInput}
              placeholder="введите описания блюда"
            />
          </label>
          <label htmlFor="image">
            <span>Ссылка на фото</span>
            <input
              name="image"
              id="image"
              value={image}
              type="text"
              onChange={this.handleChangeInput}
              placeholder="введите ссылку на кртинку"
            />
          </label>
          <label htmlFor="ingredients">
            <span>Введите ингредиенты</span>
            <input
              name="ingredients"
              id="ingredients"
              value={ingredients}
              type="text"
              onChange={this.handleChangeInput}
              placeholder="введите стоимость блюда"
            />
          </label>
          <label htmlFor="price">
            <span>Введите цену</span>
            <input
              name="price"
              id="price"
              value={price}
              type="number"
              onChange={this.handleChangeInput}
              placeholder="введите стоимость блюда"
            />
          </label>

          <span>Выберите категорию</span>
          <CategorySelector
            onChange={this.handleChangeInput}
            nameSelect="category"
            categories={categories}
          />
          <Button
            type="submit"
            value="добавить в меню"
            onClick={this.handleFormSubmit}
          />
        </form>
      </>
    );
  }
}
