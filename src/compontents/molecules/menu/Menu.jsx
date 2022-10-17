import React from 'react';
import styles from '../menu/Menu.module.scss'
import { Link } from 'react-router-dom';

const Menu = () => {
  return (

    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <Link to="/aboutme">About me</Link>
        </li>
        <li className={styles.list__item}>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className={styles.list__item}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={styles.list__item}>
          <a target="_blank" href="https://github.com/IgorSzymborski">GitHub</a>
        </li>
        <li className={styles.list__item}>
          <a target="_blank" href="https://pl.linkedin.com/in/igor-szymborski-52514b245">Linkedin</a>
        </li>
      </ul>
    </div>

  );
};


export default Menu;