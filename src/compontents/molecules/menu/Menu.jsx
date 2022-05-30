import React from 'react';
import styles from '../menu/Menu.module.scss'
import { Link } from 'react-router-dom';

const Menu = () => {
  return (

    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <Link to="AboutMe">About me</Link>
        </li>
        <li className={styles.list__item}>
          <Link to="Portfolio">Portfolio</Link>
        </li>
        <li className={styles.list__item}>
          <Link to="Contact">Contact</Link>
        </li>
        <li className={styles.list__item}>
          <a target="_blank" href="https://github.com/IgorSzymborski">GitHub</a>
        </li>
      </ul>
    </div>

  );
};


export default Menu;