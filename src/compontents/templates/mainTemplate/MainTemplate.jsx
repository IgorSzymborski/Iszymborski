import React from 'react';
import Navigation from '../../organisms/navigation/Navigation';
import HomePage from '../homePage/HomePage';
import AboutMe from '../aboutMe/AboutMe';
import MyProjects from '../portfolio/Portfolio';
import Contact from '../contact/Contact';
import me from '../../../assets/main1-min.png';
import styles from '../mainTemplate/MainTemplate.module.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const MainTemplate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapperPhoto}>
        <img className={styles.img} src={me} alt="me"></img>
      </div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/portfolio" element={<MyProjects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};


export default MainTemplate;