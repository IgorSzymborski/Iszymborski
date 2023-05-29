import React from 'react';
import styles from '../homePage/HomePage.module.scss'
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    
    
    <section className={styles.container}>
      <div className={styles.container__titleBox}>
        <h5 className={styles.container__titleBox__h5}>Hi, I'm Igor</h5>
        <h1 className={styles.container__titleBox__h1}>Front-end <br /> developer.</h1>
        <Link className={styles.container__titleBox__link} to='AboutMe'>
        <h3 className={styles.container__titleBox__h3}>Learn more</h3>
        </Link>
      </div>
    </section>
    
    
  );
};

export default HomePage;