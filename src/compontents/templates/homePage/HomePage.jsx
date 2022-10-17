import React from 'react';
import styles from '../homePage/HomePage.module.scss'
import AnimatedRoutes from '../../atoms/AnimatedRoutes/AnimatedRoutes'
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    
    <AnimatedRoutes>
    <section className={styles.container}>
      <div className={styles.container__titleBox}>
        <h5>Hi, I'm Igor</h5>
        <h1>Front-end <br /> developer.</h1>
        <Link to='AboutMe'>
        <h3>Learn more</h3>
        </Link>
      </div>
    </section>
    </AnimatedRoutes>
    
  );
};

export default HomePage;