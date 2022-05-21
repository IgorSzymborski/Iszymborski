import React from 'react';
import styles from '../portfolio/Portfolio.module.scss';
import { portfolioList } from '../../../data/data';

const Portfolio = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.container__title}>Portfolio</h1>
      <ul className={styles.container__portfolioList}>
        {portfolioList.map((item) => (
          <li className={styles.container__portfolioList__portfolio}>
            <img src={item.photo} alt={item.name} />
            <p>{item.name}</p>
          </li>
        ))}


      </ul>

    </section>
  );
};


export default Portfolio;