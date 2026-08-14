import React from 'react';

const StatsSection = () => {
  const statsData = [
    { value: "1021", label: "FINISHED SESSIONS" },
    { value: "100%", label: "SATISFACTION RATE" },
    { value: "2562+", label: "ENROLLED LEARNERS" },
    { value: "100", label: "ONLINE INSTRUCTORS" }
  ];

  return (
    <section className="stats-section-wrapper">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div className="stat-counter-card" key={index}>
            <h2 className="stat-number-value">{stat.value}</h2>
            <p className="stat-label-text">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;