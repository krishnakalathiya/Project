import React from 'react';

const LabFacilities = () => {
  return (
    <div className="liggeet-layout-wrapper">
      {/* 2. Main Laboratory Showcase Section Area */}
      <section className="lab-section-wrapper">
        <div className="lab-bg-hero-showcase">
          <img 
            src="https://html.tonatheme.com/2025/liggeet/assets/images/background/bg-image-02.jpg" 
            alt="Students collaborating on campus grounds" 
            className="lab-hero-img"
          />
        </div>

        {/* Floating Content Card Framework Container */}
        <div className="lab-container-overlay">
          <div className="lab-content-card">
            <h2 className="lab-main-heading">Laboratory and Facilities</h2>
            <p className="lab-description-text">
              Etiam in arcu dictum, maximus libero ac, porttitor ante. 
              Mauris in ultricies odio, id porttitor nulla. Phasellus 
              tristique vehicula eros id hendrerit. Interdum et 
              malesuada fames ac .
            </p>
            <button className="lab-details-btn">More Details</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LabFacilities;