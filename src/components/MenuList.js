import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

// styles
import s from '../styles/menuList.module.css';

const menuList = ({ list, match: { url }, location }) => (
  <ul className={s.list}>
    {list.map(({ name, id, image, price }) => (
      <li key={name}>
        <Link
          to={{
            pathname: `${url}/${id}`,
            state: { from: location },
          }}
        >
          <img src={image} className={s.img} alt={name} />
          <p>{name}</p>
          <p> цена: {price}</p>
        </Link>
      </li>
    ))}
  </ul>
);

export default withRouter(menuList);
