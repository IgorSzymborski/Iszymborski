import React from 'react';
import Navigation from '../../organisms/navigation/Navigation';
import HomePage from '../homePage/HomePage';
import styles from '../mainTemplate/MainTemplate.module.scss'

const MainTemplate = () => {
  return (
    <div className={styles.container}>
      <Navigation/>
      <HomePage/>
    </div>
  );
};


export default MainTemplate;