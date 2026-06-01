import React from 'react';

const ShowcaseGrid = () => {
  const cardsData = [
    {
      title: "Continuing Education",
      image: "https://html.tonatheme.com/2025/liggeet/assets/images/program/program-image-01.jpg"
    },
    {
      title: "Graduate Admissions",
      image: "https://html.tonatheme.com/2025/liggeet/assets/images/program/program-image-02.jpg"
    },
    {
      title: "Undergraduate Admissions",
      image: "https://html.tonatheme.com/2025/liggeet/assets/images/program/program-image-03.jpg"
    },
    {
      title: "Research at Liggeet",
      image: "https://html.tonatheme.com/2025/liggeet/assets/images/program/program-image-04.jpg"
    }
  ];

  return (
    <div className="liggeet-layout-wrapper">
      <section className="showcase-section-wrapper">
        <div className="showcase-grid-container">
          {cardsData.map((card, index) => (
            <div className="showcase-card" key={index}>
              {/* Image Box */}
              <div className="showcase-image-box">
                <img src={card.image} alt={card.title} className="showcase-img" />
              </div>
              
              {/* Overlapping Bottom Content Label */}
              <div className="showcase-content-label">
                <h3 className="showcase-card-title">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ShowcaseGrid;