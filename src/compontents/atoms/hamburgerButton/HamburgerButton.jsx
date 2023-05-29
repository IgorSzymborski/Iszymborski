import React from 'react';
import styles from '../hamburgerButton/HamburgerButton.module.scss'


const HamburgerButton = ({ click }) => {
  return (
    <button onClick={click} className={styles.hamburger}>
      <span className={styles.hamburger__box}>
        <span className={styles.hamburger__inner}></span>
      </span>
    </button>
  );
};


export default HamburgerButton;