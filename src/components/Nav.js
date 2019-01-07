import React from 'react';
import { NavLink } from 'react-router-dom';

// styles
import s from '../styles/nav.module.css';

const Nav = ({ list }) => (
  <ul className={s.navList}>
    {list.map(({ name, to }) => (
      <li key={name}>
        <NavLink
          exact
          activeStyle={{ color: 'red' }}
          className={s.link}
          to={to}
        >
          {name}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default Nav;
