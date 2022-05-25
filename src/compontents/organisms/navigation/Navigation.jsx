import React, { useState } from 'react';
import HamburgerButton from '../../atoms/hamburgerButton/HamburgerButton';
import Menu from '../../molecules/menu/Menu';
import MobileMenu from '../../molecules/mobileMenu/MobileMenu';
import styles from '../navigation/Navigation.module.scss'

const Navigation = () => {
  const [open, setOpen] = useState(false)
  const toggleMenu = () => {
    setOpen((prevState) => !prevState)
  }
  return (
    <div className={styles.container}>
      <a href="#">
        <h3 className={styles.container__title}><span className={styles.container__i}>I</span>szymborski</h3>
      </a>
      <Menu />
      {open && <MobileMenu toggleMenu={toggleMenu} />}

      <HamburgerButton click={toggleMenu} />
    </div>
  );
};


export default Navigation;