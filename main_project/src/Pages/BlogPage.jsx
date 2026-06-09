import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { navigateTo } from '../store/navSlice';

const BlogPage = () => {
  const dispatch = useDispatch();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    console.log("Searching blog listings for:", searchQuery);
  };

  const menuItems = {
    academics: [
      { label: "Academics 01", href: "#" },
      { label: "Academics 02", href: "#" }
    ],
    admissions: [
      { label: "Graduate Admission", href: "#" },
      { label: "Undergraduate Admission", href: "#" }
    ],
    pages: [
      { label: "About Us", href: "#" },
      { label: "Register Page", href: "#" }
    ],
    blog: [
      { label: "Latest News", href: "#" },
      { label: "Student Stories", href: "#" }
    ]
  };

  // Structured data array containing all 7 distinct articles shown across your screenshots
  const blogArticles = [
    {
      id: 1,
      title: "Autism rates have increased and show differences in ethnic minorities",
      date: "10 / 30 / 2022",
      author: "Author",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      img: "https://html.tonatheme.com/2025/liggeet/assets/images/blog/blog-image-01.jpg"
    },
    {
      id: 2,
      title: "Gender inequality in higher education persists",
      date: "10 / 30 / 2022",
      author: "Author",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      img: "https://html.tonatheme.com/2025/liggeet/assets/images/blog/blog-image-02.jpg"
    },
    {
      id: 3,
      title: "Higher education is part of the Agenda 2030 ecosystem",
      date: "10 / 30 / 2022",
      author: "Author",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      img: "https://html.tonatheme.com/2025/liggeet/assets/images/blog/blog-image-03.jpg"
    },
    {
      id: 4,
      title: "How Much Do International Students Bring To The UK",
      date: "10 / 30 / 2022",
      author: "Author",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      img: "https://html.tonatheme.com/2025/liggeet/assets/images/blog/blog-image-04.jpg"
    },
    {
      id: 5,
      title: "Undergraduate Tuition Fees Axed At All Universities",
      date: "10 / 30 / 2022",
      author: "Author",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      img: "https://html.tonatheme.com/2025/liggeet/assets/images/blog/blog-image-05.jpg"
    },
    {
      id: 6,
      title: "Alumni Weekend going fully virtual for 2021",
      date: "10 / 30 / 2022",
      author: "Author",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      img: "https://html.tonatheme.com/2025/liggeet/assets/images/blog/blog-image-06.jpg"
    },
    {
      id: 7,
      title: "Sports culture expansion: New dynamic soccer program integrations",
      date: "10 / 30 / 2022",
      author: "Author",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      img: "https://html.tonatheme.com/2025/liggeet/assets/images/blog/blog-image-07.jpg"
    }
  ];

  return (
    <div className="liggeet-blog-page-wrapper">
      
      {/* 1. Specialized Top Utility Row Bar */}
      <div className="blog-top-bar">
        <div className="blog-container-fluid utility-row-flex">
          <div className="utility-info-left">
            <span className="address-info">2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
            <a href="mailto:info@templatepath.com" className="email-info">info@templatepath.com</a>
          </div>
          <button 
            className="top-login-register-btn" 
            onClick={() => dispatch(navigateTo('login'))}
          >
            Login / Register
          </button>
        </div>
      </div>

      {/* 2. Main Navigation Bar Row Layout */}
      <div className="blog-nav-row">
        <div className="blog-container-fluid nav-row-flex">
          
          {/* Logo Brand Component Group */}
          <div 
            className="logo-area" 
            onClick={() => dispatch(navigateTo('home'))} 
            style={{ cursor: 'pointer' }}
          >
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="#F06371" />
                <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="#E28743" />
              </svg>
            </div>
            <div className="logo-text">
              <span className="sub-title">university</span>
              <span className="main-title">LIGGEET</span>
            </div>
          </div>

          {/* Interactive Navigation menu list */}
          <nav className="blog-main-nav">
            <ul className="blog-nav-links">
              <li className="blog-nav-item">
                <a href="#home" onClick={(e) => { e.preventDefault(); dispatch(navigateTo('home')); }}>Home</a>
              </li>

              {Object.keys(menuItems).map((key) => (
                <li 
                  key={key}
                  className={`blog-nav-item has-dropdown ${key === 'blog' ? 'active' : ''}`}
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button 
                    className="blog-nav-btn"
                    onClick={() => dispatch(navigateTo(key === 'admissions' ? 'careers' : key))}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </button>
                  <ul className={`blog-dropdown-menu ${activeDropdown === key ? 'show' : ''}`}>
                    {menuItems[key].map((item, idx) => (
                      <li key={idx}><a href={item.href}>{item.label}</a></li>
                    ))}
                  </ul>
                </li>
              ))}

              <li className="blog-nav-item">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Integrated Soft Pink Search input field */}
          <form className="header-search-form" onSubmit={handleSearchSubmit}>
            <input 
              type="text" 
              placeholder="Search ..." 
              className="header-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="header-search-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>

        </div>
      </div>

      {/* 3. White Minimal Breadcrumb Header Canvas (Screenshot 1 Match) */}
      <section className="blog-title-canvas-viewport">
        <div className="blog-container-fluid path-and-title-box">
          <div className="blog-breadcrumb-path">
            <span className="crumb-home-anchor" onClick={() => dispatch(navigateTo('home'))}>Home</span>
            <span className="crumb-arrow-separator">/</span>
            <span className="crumb-active-page">Blog</span>
          </div>
          <div className="blog-centered-title-node">
            <h1 className="blog-main-h1-heading">Blog</h1>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         4. CORE TWO-COLUMN FLUID CARD GRID VIEWPORT (Screenshots 2 to 6 Match)
         ========================================================================== */}
      <main className="blog-grid-workspace-section">
        <div className="blog-container-fluid articles-asymmetrical-grid">
          {blogArticles.map((article) => (
            <article key={article.id} className="blog-post-card-item">
              
              {/* Image Frame Wrapper with subtle scale transitions */}
              <div className="blog-card-image-wrapper">
                <img 
                  src={article.img} 
                  alt={article.title} 
                  className="blog-card-img-asset" 
                />
              </div>

              {/* Subtitle Attribution Details Meta-Row */}
              <div className="blog-card-meta-details-row">
                <span className="meta-author-label">{article.author}</span>
                <span className="meta-date-string">{article.date}</span>
              </div>

              {/* Central Text Core Blocks */}
              <div className="blog-card-content-body">
                <h2 className="blog-card-title-heading">{article.title}</h2>
                <p className="blog-card-excerpt-text">{article.excerpt}</p>
              </div>

            </article>
          ))}
        </div>
      </main>

    </div>
  );
};

export default BlogPage;