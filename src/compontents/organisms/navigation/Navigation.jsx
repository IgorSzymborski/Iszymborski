import React from 'react';
import styles from '../navigation/Navigation.module.scss'

const Navigation = () => {
  return (
    <div className={styles.container}>
      <a href="#">
        <h3 className={styles.container__title}>Iszymborski</h3>
      </a>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          <li className={styles.list__item}>About me</li>
          <li className={styles.list__item}>Portfolio</li>
          <li className={styles.list__item}>Contact</li>
          <li className={styles.list__item}>GitHub</li>
        </ul>
      </div>
    </div>
  );
};


export default Navigation;