import React from 'React';
import { useSelector, useDispatch } from 'react-redux';
import { navigateTo } from './Store/navSlice.jsx';
import Header from './Pages/Header.jsx';
import FeaturesSection from './Pages/FeaturesSection.jsx';
import AboutOpenDay from './Pages/AboutOpenDay.jsx';
import LabFacilities from './Pages/LabFacilities.jsx';
import StatsSection from './Pages/StatsSection.jsx';
import ShowcaseGrid from './Pages/ShowcaseGrid.jsx';
import OurStudies from './Pages/OurStudies.jsx';
import LatestNews from './Pages/LatestNews.jsx';
import HeroCarousel from './Pages/HeroCarousel.jsx';
import TrustedLogos from './Pages/TrustedLogos.jsx';
import InstagramFeed from './Pages/InstagramFeed.jsx';
import NewsletterBanner from './Pages/NewsletterBanner.jsx';
import LoginHeader from './Pages/Login.jsx';
import RegisterPage from './Pages/RegisterPage.jsx';
import AcademicsPage from './Pages/AcademicsPage.jsx';
import CareersPage from './Pages/CareersPage.jsx';
import FaqPage from './Pages/FaqPage.jsx';
import BlogPage from './Pages/BlogPage.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import Footer from './Pages/Footer.jsx';
import './App.css';

function App() {
  const dispatch = useDispatch();
  
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
          <LoginHeader />
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

      {currentPage === 'careers' && (
        <div className="careers-page-view">
          <CareersPage />
          <Footer />
        </div>
      )}

      {currentPage === 'faq' && (
        <div className="faq-page-view">
          <FaqPage />
          <Footer />
        </div>
      )}

      {currentPage === 'blog' && (
        <div className="blog-page-view">
          <BlogPage />
          <Footer />
        </div>
      )}

      {currentPage === 'contact' && (
      <div className="contact-page-view">
          <ContactPage />
          <Footer />
      </div>
)}
    </div>
  );
}

export default App;