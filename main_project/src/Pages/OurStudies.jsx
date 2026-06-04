import React from 'react';

const OurStudies = () => {
  const studiesData = [
    { title: "Architecture", desc: "Sed gravida nisl a porta tincidunt. Integer aliquam." },
    { title: "Design", desc: "Sed gravida nisl a porta tincidunt. Integer aliquam." },
    { title: "Engineering", desc: "Sed gravida nisl a porta tincidunt. Integer aliquam." },
    { title: "Sciences", desc: "Sed gravida nisl a porta tincidunt. Integer aliquam." },
    { title: "Education", desc: "Sed gravida nisl a porta tincidunt. Integer aliquam." },
    { title: "IT", desc: "Sed gravida nisl a porta tincidunt. Integer aliquam." },
    { title: "Health Care", desc: "Sed gravida nisl a porta tincidunt. Integer aliquam." },
    { title: "Economy", desc: "Sed gravida nisl a porta tincidunt. Integer aliquam." }
  ];

  return (
    <div className="liggeet-layout-wrapper">
      <section className="studies-section-wrapper">
        <div className="studies-section-header">
          <span className="studies-tagline">Student studies</span>
          <h2 className="studies-main-heading">Our Studies</h2>
        </div>
        
        <div className="studies-grid-container">
          {studiesData.map((study, index) => (
            <div className="study-grid-item" key={index}>
              <h3 className="study-item-title">{study.title}</h3>
              <p className="study-item-description">{study.desc}</p>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
};

export default OurStudies;