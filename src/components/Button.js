import React from 'react';

import s from '../styles/button.module.css';

const button = ({ value, onClick }) => (
  <button className={s.button} onClick={onClick} type="button">
    {value}
  </button>
);

export default button;
