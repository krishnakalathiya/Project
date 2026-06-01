import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Affordability",
      description: "Sed gravida nisl a porta tincidunt. Integer aliquam. To the power."
    },
    {
      title: "Academics",
      description: "Sed gravida nisl a porta tincidunt. Integer aliquam. To the power."
    },
    {
      title: "Inspiring Student Life",
      description: "Sed gravida nisl a porta tincidunt. Integer aliquam. To the power."
    }
  ];

  return (
    <section className="liggeet-features-section">
      <div className="grid-content-wrapper">
        <div className="vector-left-squiggly">
          <svg viewBox="0 0 148 214" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2C26.5 45 74.5 24.5 58 77.5C41.5 130.5 142.5 106 109.5 163.5C83.1 209.5 7 194.5 12 212" stroke="#ff526c" strokeWidth="2" opacity="0.4"/>
          </svg>
        </div>

        <div className="section-container features-grid">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;