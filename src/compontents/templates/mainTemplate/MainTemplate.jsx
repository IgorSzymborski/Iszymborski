import React from 'react';
import Navigation from '../../organisms/navigation/Navigation';
import HomePage from '../homePage/HomePage';
import AboutMe from '../aboutMe/AboutMe';
import MyProjects from '../portfolio/Portfolio';
import Contact from '../contact/Contact';
import styles from '../mainTemplate/MainTemplate.module.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const MainTemplate = () => {
  return (
    <div className={styles.container}>

      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="AboutMe" element={<AboutMe />} />
          <Route path='Portfolio' element={<MyProjects />} />
          <Route path='Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};


export default MainTemplate;