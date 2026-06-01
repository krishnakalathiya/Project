import React from 'react';

const TrustedLogos = () => {
  // Using clean typography and SVGs/text-rendering to match the minimalist partner layout
  const companies = [
    { name: "utopix", className: "logo-utopix" },
    { name: "Palm Marina", subtitle: "NGÔI NHÀ VỀ CHĂN DỤNG GIA CHỦ", className: "logo-palm-marina" },
    { name: "minimal", className: "logo-minimal" },
    { name: "SMATRICS", subtitle: "Strom gibt Gas.", className: "logo-smatrics" },
    { name: "SMATRICS", subtitle: "Strom gibt Gas.", className: "logo-smatrics-duplicate" }
  ];

  return (
    <div className="liggeet-layout-wrapper">

      {/* Main Trusted Companies Partner Section */}
      <section className="trusted-partners-section">
        <div className="partners-container">
          
          {/* Section Main Title Heading */}
          <h2 className="partners-heading">Trusted By 1k+ Company Arround The World!</h2>
          
          {/* Flexbox/Grid Logos Row Container */}
          <div className="partners-logos-row">
            {companies.map((company, index) => (
              <div className={`partner-logo-item ${company.className}`} key={index}>
                {/* Simulated minimal vector text design matching template silhouettes */}
                <div className="partner-brand-logo-ui">
                  <span className="brand-main-text">{company.name}</span>
                  {company.subtitle && <span className="brand-sub-text">{company.subtitle}</span>}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default TrustedLogos;