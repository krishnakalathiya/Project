import React, { useState } from 'react';

const HeroCarousel = () => {
  const eventsData = [
    {
      id: 1,
      day: "29",
      monthYear: "Aug, 2022",
      title: "Open library literature talks ...",
      time: "10.00 A.M - 12:00PM",
      location: "United Arab Emirates"
    },
    {
      id: 2,
      day: "30",
      monthYear: "June, 2023",
      title: "Campus Orientation & Welcoming Day ...",
      time: "09.00 A.M - 01:00PM",
      location: "Main Auditorium"
    },
    {
      id: 3,
      day: "25",
      monthYear: "Aug, 2022",
      title: "International Science & Research Expo ...",
      time: "11.00 A.M - 04:00PM",
      location: "Tech Labs"
    }
  ];

  const [activeEventId, setActiveEventId] = useState(1);

  return (
    <div className="liggeet-layout-wrapper">

      {/* Main Unified Hero Section */}
      <section className="main-hero-carousel">
        
        {/* Background Image Container with modern architecture overlay */}
        <div className="hero-background-media">
          <img 
            src="https://html.tonatheme.com/2025/liggeet/assets/images/background/bg-image-03.jpg" 
            alt="Modern University Architecture Campus" 
            className="hero-media-img"
          />
          <div className="hero-media-overlay"></div>
        </div>

        {/* Decorative Teal Swirling Arrow Loop (Top Right) */}
        <div className="hero-teal-arrow-accent">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 50C20 20 50 15 65 30C80 45 60 70 40 65C25 60 30 40 55 45M55 45L48 38M55 45L48 52" stroke="#00a7ac" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
          </svg>
        </div>

        {/* Core Marketing Copy Layout Container */}
        <div className="hero-copy-container">
          <div className="hero-copy-inner">
            <span className="hero-copy-tagline">For A Better Future</span>
            <h1 className="hero-copy-title">
              TO LEARN ABOUT THE<br />WORLD
            </h1>
          </div>
        </div>

        {/* Slider Navigation Chevron Controls (Sides) */}
        <button className="carousel-arrow-btn arrow-left">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button className="carousel-arrow-btn arrow-right">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7"/></svg>
        </button>

        {/* Overlapping Bottom Event Tabs Block Container */}
        <div className="hero-bottom-events-dock">
          <div className="events-dock-container">
            {eventsData.map((evt) => {
              const isSelected = activeEventId === evt.id;
              return (
                <div 
                  className={`event-dock-tab-card ${isSelected ? 'is-expanded' : 'is-collapsed'}`}
                  key={evt.id}
                  onClick={() => setActiveEventId(evt.id)}
                >
                  {isSelected ? (
                    /* Active Expanded Display Block View */
                    <div className="expanded-card-inner">
                      <div className="expanded-date-badge">
                        <span className="expanded-day">{evt.day}</span>
                        <span className="expanded-month">{evt.monthYear}</span>
                      </div>
                      <h3 className="expanded-event-title">{evt.title}</h3>
                      <div className="expanded-meta-row">
                        <span className="meta-time-icon"></span>
                        <span>{evt.time}</span>
                      </div>
                      <div className="expanded-meta-row">
                        <span className="meta-loc-icon"></span>
                        <span>{evt.location}</span>
                      </div>
                      <a href="#find-out" className="expanded-card-link">Find out more</a>
                    </div>
                  ) : (
                    /* Inactive Collapsed Compact View Strip */
                    <div className="collapsed-card-inner">
                      <span className="collapsed-day-number">{evt.day}</span>
                      <span className="collapsed-month-text">{evt.monthYear.split(',')[0]}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HeroCarousel;