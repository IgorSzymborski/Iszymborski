import React from 'react';
import Navigation from '../../organisms/navigation/Navigation';
import HomePage from '../homePage/HomePage';
import AboutMe from '../aboutMe/AboutMe';
import MyProjects from '../portfolio/Portfolio';
import styles from '../mainTemplate/MainTemplate.module.scss';

const MainTemplate = () => {
  return (
    <div className={styles.container}>
      <Navigation/>
      <HomePage/>
      <AboutMe/>
      <MyProjects/>
    </div>
  );
};


export default MainTemplate;