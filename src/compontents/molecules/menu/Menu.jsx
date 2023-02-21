import {React} from 'react';
import styles from '../menu/Menu.module.scss'
import { NavLink } from 'react-router-dom';


const Menu = () => {
  

  return (
    
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <NavLink to="/aboutme">About me</NavLink>
        </li>

        <li className={styles.list__item} >
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>

        <li className={styles.list__item}>
          <NavLink to="/contact">Contact</NavLink>
        </li>

        <li className={styles.list__item}>
          <a target="_blank" rel="noreferrer" href="https://github.com/IgorSzymborski">GitHub</a>
        </li>

        <li className={styles.list__item}>
          <a target="_blank" rel="noreferrer" href="https://pl.linkedin.com/in/igor-szymborski-52514b245">Linkedin</a>
        </li>
      </ul>
    </div>

  );
};


export default Menu;