import React from 'react';
import styles from '../mobileMenu/MobileMenu.module.scss'
import { Link } from 'react-router-dom';

const MobileMenu = ({ toggleMenu }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li onClick={toggleMenu} className={styles.list__item}>
          <Link to="AboutMe">About me</Link>
        </li>
        <li onClick={toggleMenu} className={styles.list__item}>
          <Link to="Portfolio">Portfolio</Link>
        </li>
        <li onClick={toggleMenu} className={styles.list__item}>
          <Link to="Contact">Contact</Link>
        </li>
        <li onClick={toggleMenu} className={styles.list__item}>
          <a target="_blank" rel="noreferrer" href="https://github.com/IgorSzymborski">GitHub</a>
        </li>
        <li className={styles.list__item}>
          <a target="_blank" rel="noreferrer" href="https://pl.linkedin.com/in/igor-szymborski-52514b245">Linkedin</a>
        </li>
      </ul>

    </div>
  );
};



export default MobileMenu;