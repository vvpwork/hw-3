import React from 'react';

//* components*/
import Nav from './Nav';

//* styles*/
import s from '../styles/header.module.css';

const list = [
  {
    name: 'Главная',
    to: '/',
  },
  {
    name: 'Меню',
    to: '/menu',
  },
];

const header = () => (
  <header className={s.header}>
    <Nav list={list} />
  </header>
);

export default header;
