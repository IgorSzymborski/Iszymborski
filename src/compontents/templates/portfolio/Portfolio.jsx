import React from "react";
import styles from "../portfolio/Portfolio.module.scss";
import { portfolioList } from "../../../data/data";
import { BiChevronsRight } from "react-icons/bi";

const Portfolio = () => {
  return (
    <section className={styles.container}>
      <h1 id="portfolio" className={styles.container__title}>
        Portfolio
      </h1>
      <ul className={styles.container__portfolioList}>
        {portfolioList.map((item) => (
          <li
            key={item.name}
            className={styles.container__portfolioList__portfolio}
          >
            <a
              className={styles.imgLink}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={styles.imgLink__img}
                src={item.photo}
                alt={item.name}
              />
            </a>
            <p>{item.name}</p>
            <p>Technology stack: {item.technology}</p>
            <a
              className={styles.link}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              {`Check this projcet`} <BiChevronsRight className={styles.icon} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;
