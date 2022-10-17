import React from 'react';
import styles from '../aboutMe/AboutMe.module.scss'
import AnimatedRoutes from '../../atoms/AnimatedRoutes/AnimatedRoutes'
import { Link } from 'react-router-dom';


const AboutMe = () => {
  return (
    <AnimatedRoutes>
    <section id="aboutme" className={styles.container}>
      <h1 className={styles.container__aboutMe}>About me</h1>
      <p className={styles.container__text}>Creative and independent Front-End Developer with over a few months building stable apps and websites in fast-paced. I am self-taught. </p>
      <p className={styles.container__text}>Skilled in JavaScript/React/Scss and the rest of the tools you need to write better, cleaner code.</p>
      <p className={styles.container__text}>Programming has become my passion for which I devote every free moment. I also interesting in sports, and more precisely - fights sports.</p>
      <Link className={styles.container__text} to="/contact">
      <p className={styles.container__text}>Have an interesting project
      <span className={styles.container__letsTalk}>Let's talk.</span></p>
      </Link>
    </section>
    </AnimatedRoutes>
  );
};


export default AboutMe;