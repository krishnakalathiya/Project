import React from 'react';

const InstagramFeed = () => {
  const instagramPhotos = [
    "https://html.tonatheme.com/2025/liggeet/assets/images/instagram/instagram-01.jpg", 
    "https://html.tonatheme.com/2025/liggeet/assets/images/instagram/instagram-02.jpg", 
    "https://html.tonatheme.com/2025/liggeet/assets/images/instagram/instagram-03.jpg", 
    "https://html.tonatheme.com/2025/liggeet/assets/images/instagram/instagram-03.jpg", 
    "https://html.tonatheme.com/2025/liggeet/assets/images/instagram/instagram-03.jpg",
    "https://html.tonatheme.com/2025/liggeet/assets/images/instagram/instagram-06.jpg", 
    "https://html.tonatheme.com/2025/liggeet/assets/images/instagram/instagram-06.jpg",
    "https://html.tonatheme.com/2025/liggeet/assets/images/instagram/instagram-08.jpg"  
  ];

  return (
    <div className="liggeet-layout-wrapper">
       
      {/* Main Instagram Feed Section */}
      <section className="instagram-section-wrapper">
        
        {/* Section Heading Group */}
        <div className="instagram-section-header">
          <span className="instagram-tagline">Instagram</span>
          <h2 className="instagram-main-heading">From @liggeet_official on Instagram</h2>
        </div>

        {/* 4-Column, 2-Row Layout Photo Grid */}
        <div className="instagram-grid-container">
          {instagramPhotos.map((photoUrl, index) => (
            <div className="instagram-grid-item" key={index}>
              <div className="instagram-image-frame">
                <img src={photoUrl} alt={`Instagram post ${index + 1}`} className="instagram-img" />
                {/* Hover Overlay Layer mimicking active social links */}
                <div className="instagram-hover-overlay">
                  <span className="instagram-icon-placeholder">📸</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
};

export default InstagramFeed;