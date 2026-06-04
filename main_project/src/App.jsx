import React from 'react';
import Header from './Pages/Header';
import FeaturesSection from './Pages/FeaturesSection' 
import AboutOpenDay from './Pages/AboutOpenDay';
import LabFacilities from './Pages/LabFacilities';
import StatsSection from './Pages/StatsSection';
import ShowcaseGrid from './Pages/ShowcaseGrid';
import OurStudies from './Pages/OurStudies';
import LatestNews from './Pages/LatestNews';
import HeroCarousel from './Pages/HeroCarousel';
import TrustedLogos from './Pages/TrustedLogos';
import Instagram from './Pages/InstagramFeed';
import './App.css';
import InstagramFeed from './Pages/InstagramFeed';
import NewsletterBanner from './Pages/NewsletterBanner';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      < FeaturesSection/>
      <AboutOpenDay/>
      <LabFacilities/>
      <StatsSection/>
      <ShowcaseGrid/>
      <OurStudies/>
      <LatestNews/>
      <HeroCarousel/>
      <TrustedLogos/>
      <InstagramFeed/>
      <NewsletterBanner/>
      <Footer/>
    </div>
  );
}

export default App;