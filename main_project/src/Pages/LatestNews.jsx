import React from 'react';

const LatestNews = () => {
  const newsData = [
    {
      image: "https://html.tonatheme.com/2025/liggeet/assets/images/blog/blog-image-01.jpg",
      author: "Author",
      date: "10 /30/2022",
      title: "Autism rates have increased and show differences in ethnic minorities",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
      image: "https://html.tonatheme.com/2025/liggeet/assets/images/blog/blog-image-02.jpg",
      author: "Author",
      date: "10 /30/2022",
      title: "Gender inequality in higher education persists",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
      image: "https://html.tonatheme.com/2025/liggeet/assets/images/blog/blog-image-03.jpg",
      author: "Author",
      date: "10 /30/2022",
      title: "Higher education is part of the Agenda 2030 ecosystem",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    }
  ];

  return (
    <div className="liggeet-layout-wrapper">

      <section className="news-section-wrapper">
        <div className="news-bg-tint-layer"></div>
        <div className="news-top-heart-accent">
          <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 43C25 43 5 30 5 16.5C5 9.5 10.5 4 17.5 4C21.5 4 24 6.5 25 8.5C26 6.5 28.5 4 32.5 4C39.5 4 45 9.5 45 16.5C45 30 25 43 25 43Z" stroke="#ff526c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"/>
          </svg>
        </div>

        <div className="news-section-header">
          <div className="header-left-titles">
            <span className="news-tagline">News & Blogs</span>
            <h2 className="news-main-heading">Latest News</h2>
          </div>
          <div className="header-right-action">
            <button className="view-all-news-btn">View all news</button>
          </div>
        </div>

        <div className="news-grid-container">
          {newsData.map((news, index) => (
            <div className="news-card-item" key={index}>
              <div className="news-image-frame">
                <img src={news.image} alt={news.title} className="news-card-img" />
              </div>
              <div className="news-card-meta-bar">
                <span className="meta-author">{news.author}</span>
                <span className="meta-date">{news.date}</span>
              </div>
              <div className="news-card-body">
                <h3 className="news-card-title">{news.title}</h3>
                <p className="news-card-description">{news.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default LatestNews;