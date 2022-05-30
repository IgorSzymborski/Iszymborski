import React from 'react';
import styles from '../homePage/HomePage.module.scss'
import duck from '../../../assets/duck.png'

const HomePage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container__titleBox}>
        <h5>Hi, I'm Igor</h5>
        <h1>Front-end <br /> developer.</h1>
      </div>
      <div className={styles.container__photoBox}>
        {/* <img src={duck} alt="duck" /> */}
      </div>
    </section>
  );
};



export default HomePage;