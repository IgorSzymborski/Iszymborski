import React from 'react';
import styles from '../menu/Menu.module.scss'

const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <a href="#aboutme">About me</a>
        </li>
        <li className={styles.list__item}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className={styles.list__item}>
          <a href="">Contact</a>
        </li>
        <li className={styles.list__item}>
          <a target="_blank" href="https://github.com/IgorSzymborski">GitHub</a>
        </li>
      </ul>
    </div>
  );
};



export default Menu;