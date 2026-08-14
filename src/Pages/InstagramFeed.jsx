import React from 'react';

const InstagramFeed = () => {
  const instagramPhotos = [
    "https://html.tonatheme.com/2025/liggeet/assets/images/instagram/instagram-01.jpg", 
    "https://html.tonatheme.com/2025/liggeet/assets/images/instagram/instagram-02.jpg", 
    "https://html.tonatheme.com/2025/liggeet/assets/images/instagram/instagram-03.jpg", 
    "https://html.tonatheme.com/2025/liggeet/assets/images/instagram/instagram-04.jpg", 
    "https://html.tonatheme.com/2025/liggeet/assets/images/instagram/instagram-05.jpg",
    "https://html.tonatheme.com/2025/liggeet/assets/images/instagram/instagram-06.jpg", 
    "https://html.tonatheme.com/2025/liggeet/assets/images/instagram/instagram-07.jpg",
    "https://html.tonatheme.com/2025/liggeet/assets/images/instagram/instagram-08.jpg"  
  ];

  return (
    <div className="liggeet-layout-wrapper">
      <section className="instagram-section-wrapper">
        <div className="instagram-section-header">
          <span className="instagram-tagline">Instagram</span>
          <h2 className="instagram-main-heading">From @liggeet_official on Instagram</h2>
        </div>
        <div className="instagram-grid-container">
          {instagramPhotos.map((photoUrl, index) => (
            <div className="instagram-grid-item" key={index}>
              <div className="instagram-image-frame">
                <img src={photoUrl} alt={`Instagram post ${index + 1}`} className="instagram-img" />
          
                <div className="instagram-hover-overlay">
                  <span className="instagram-icon-placeholder"></span>
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