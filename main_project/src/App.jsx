import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { navigateTo } from './store/navSlice';

import Header from './Pages/Header';
import FeaturesSection from './Pages/FeaturesSection';
import AboutOpenDay from './Pages/AboutOpenDay';
import LabFacilities from './Pages/LabFacilities';
import StatsSection from './Pages/StatsSection';
import ShowcaseGrid from './Pages/ShowcaseGrid';
import OurStudies from './Pages/OurStudies';
import LatestNews from './Pages/LatestNews';
import HeroCarousel from './Pages/HeroCarousel';
import TrustedLogos from './Pages/TrustedLogos';
import InstagramFeed from './Pages/InstagramFeed';
import NewsletterBanner from './Pages/NewsletterBanner';
import LoginHeader from './Pages/login';
import RegisterPage from './Pages/RegisterPage';
import AcademicsPage from './Pages/AcademicsPage';
import Footer from './Pages/Footer';
import './App.css';

function App() {
  const dispatch = useDispatch();
  
  // Grabs the current page routing name straight from the Redux store
  const currentPage = useSelector((state) => state.navigation.currentPage);

  return (
    <div className="app-container">
      
      {/* 1. HOMEPAGE VIEW STREAM */}
      {currentPage === 'home' && (
        <div className="App">
          {/* Triggers Redux to switch view layout profile on click */}
          <Header onLoginClick={() => dispatch(navigateTo('login'))} />
          <FeaturesSection />
          <AboutOpenDay />
          <LabFacilities />
          <StatsSection />
          <ShowcaseGrid />
          <OurStudies />
          <LatestNews />
          <HeroCarousel />
          <TrustedLogos />
          <InstagramFeed />
          <NewsletterBanner />
          <Footer />
        </div>
      )}

      {/* 2. ISOLATED LOGIN CARD HEADER VIEW */}
      {currentPage === 'login' && (
        <div className="login-page-view">
          <LoginHeader onBackClick={() => dispatch(navigateTo('home'))} />
          <Footer />
        </div>
      )}

      {/* 3. NEW UNIFIED REDUX REGISTER VIEW PAGE */}
      {currentPage === 'register' && (
        <div className="register-page-view">
          <RegisterPage />
          <Footer />
        </div>
      )}

{/* 4. NEW ACADEMICS ROUTE */}
      {currentPage === 'academics' && (
        <div className="academics-page-view">
          <AcademicsPage />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;