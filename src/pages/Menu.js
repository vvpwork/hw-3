import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

// components
import MenuList from '../components/MenuList';
import CategorySelector from '../components/CategorySelector';
import {
  getAllMenuItems,
  getCategories,
  getMenuItemsWithCategory,
} from '../assets/api';
import Button from '../components/Button';

export default class Menu extends Component {
  state = {
    list: [],
    categories: [],
  };

  componentDidMount() {
    const currentCategory = this.getCategory(this.props);

    getCategories().then(allCategories =>
      this.setState({
        categories: allCategories,
      }),
    );

    if (!currentCategory)
      return getAllMenuItems().then(listMenu =>
        this.setState({
          list: listMenu,
        }),
      );

    return getMenuItemsWithCategory(currentCategory).then(newCategoriesList =>
      this.setState({
        list: newCategoriesList,
      }),
    );
  }

  componentDidUpdate(prevProps) {
    const nextCategory = this.getCategory(this.props);
    const prevCategory = this.getCategory(prevProps);
    if (nextCategory === prevCategory) return null;
    if (!nextCategory)
      return getAllMenuItems().then(listMenu =>
        this.setState({
          list: listMenu,
        }),
      );
    return getMenuItemsWithCategory(nextCategory).then(newCategoriesList =>
      this.setState({
        list: newCategoriesList,
      }),
    );
  }

  getCategory = props => queryString.parse(props.location.search).category;

  handleChangeCategory = ({ target: { value } }) => {
    const {
      history,
      location: { pathname },
    } = this.props;
    history.push({
      pathname,
      search: `category=${value}`,
    });
  };

  resetFilter = () => {
    const {
      history,
      location: { pathname },
    } = this.props;
    history.push(pathname);
  };

  render() {
    const {
      match: { url },
      location,
    } = this.props;
    const { list, categories } = this.state;
    const category = this.getCategory(this.props);
    return (
      <>
        <Link
          to={{
            pathname: `${url}/add`,
            state: { from: location },
          }}
        >
          Добавить элемент меню
        </Link>
        <CategorySelector
          categories={categories}
          value={category}
          onChange={this.handleChangeCategory}
        />
        {category && (
          <>
            <br />
            <Button value="сбросить фильтр" onClick={this.resetFilter} />
            <p>Текущий фильтр: {category}</p>
          </>
        )}
        <MenuList list={list} />
      </>
    );
  }
}
