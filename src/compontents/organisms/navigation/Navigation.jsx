import React from 'react';
import styles from '../navigation/Navigation.module.scss'

const Navigation = () => {
  return (
    <div className={styles.container}>
      <a href="#">
        <h3 className={styles.container__title}><span className={styles.container__i}>I</span>szymborski</h3>
      </a>
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
    </div>
  );
};


export default Navigation;