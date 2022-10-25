import React from 'react';
import styles from '../portfolio/Portfolio.module.scss';
import { portfolioList } from '../../../data/data';
import AnimatedRoutes from '../../atoms/AnimatedRoutes/AnimatedRoutes'

const Portfolio = () => {
  return (
    <AnimatedRoutes>
    <section className={styles.container}>
      <h1 id="portfolio" className={styles.container__title}>Portfolio</h1>
      <ul className={styles.container__portfolioList}>
        {portfolioList.map((item) => (
          <li key={item.name} className={styles.container__portfolioList__portfolio}>
            <img src={item.photo} alt={item.name} />
            <p>{item.name}</p>
            <p>Technology stack: {item.technology}</p>
            <a href={item.link} target="_blank" rel='noreferrer'>{`Check this projcet >`}</a>
          </li>
        ))}
      </ul>
    </section>
    </AnimatedRoutes>
  )
}


export default Portfolio;