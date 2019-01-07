import React from 'react';

import s from '../styles/selector.module.css';

const Selector = ({ categories, value, onChange, nameSelect }) => (
  <select
    name={nameSelect}
    value={value}
    onChange={onChange}
    className={s.select}
  >
    {categories.map(({ name }) => (
      <option key={name} value={name}>
        {name}
      </option>
    ))}
  </select>
);

export default Selector;
