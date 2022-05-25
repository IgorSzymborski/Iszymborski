import React from 'react';
import styles from '../mobileMenu/MobileMenu.module.scss'

const MobileMenu = ({toggleMenu}) => {
  return (
    <div className={styles.container}>

      <ul className={styles.list}>
        <li onClick={toggleMenu} className={styles.list__item}>
          <a href="#aboutme">About me</a>
        </li>
        <li onClick={toggleMenu} className={styles.list__item}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={toggleMenu} className={styles.list__item}>
          <a href="">Contact</a>
        </li>
        <li onClick={toggleMenu} className={styles.list__item}>
          <a target="_blank" href="https://github.com/IgorSzymborski">GitHub</a>
        </li>
      </ul>

    </div>
  );
};



export default MobileMenu;