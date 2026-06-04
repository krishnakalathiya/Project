import React from 'react';

const TrustedLogos = () => {
  const companies = [
    { name: "utopix", className: "logo-utopix" },
    { name: "Palm Marina", subtitle: "NGÔI NHÀ VỀ CHĂN DỤNG GIA CHỦ", className: "logo-palm-marina" },
    { name: "minimal", className: "logo-minimal" },
    { name: "SMATRICS", subtitle: "Strom gibt Gas.", className: "logo-smatrics" },
    { name: "SMATRICS", subtitle: "Strom gibt Gas.", className: "logo-smatrics-duplicate" }
  ];

  return (
    <div className="liggeet-layout-wrapper">
      <section className="trusted-partners-section">
        <div className="partners-container">
          <h2 className="partners-heading">Trusted By 1k+ Company Arround The World!</h2>
          <div className="partners-logos-row">
            {companies.map((company, index) => (
              <div className={`partner-logo-item ${company.className}`} key={index}>
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