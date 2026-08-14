# Component Architecture Summary

This repository contains a modular collection of reusable **React.js** functional components built for an educational/university website template (`LIGGEET`). Every component uses standard JSX, structural layout mappings, and clean data configurations to remain highly scalable.

---

## 📌 Top-Level Structures

### 1. `Header.jsx`
* **Role**: Layout navigation and branding anchor.
* **Features**: Combines an announcement top banner, structural contact information blocks (`mailto:` and `tel:` links), and a multi-link navigation layout menu pointing to primary content routes.

### 2. `HeroCarousel.jsx`
* **Role**: Interactive promotional display section.
* **State & Functions**: Uses an active selection state (`activeEventId`) alongside structural mapping patterns to change item views. Clicking a collapsed card updates the state via an `onClick={() => setActiveEventId(evt.id)}` function, dynamically revealing event details.

### 3. `FeaturesSection.jsx`
* **Role**: Strategic value proposition highlight section.
* **Features**: Maps out a 3-column feature grid displaying academic milestones alongside absolute-positioned decorative vector elements (`svg`).

---

## 🏛️ Academic & Campus Presentation

### 4. `AboutOpenDay.jsx`
* **Role**: Split-content marketing overview section.
* **Functions**: Takes an array of raw strings and passes them through a dynamic transform function inside the mapping loop:
  `href={`#${linkText.toLowerCase().replace(/ /g, '-')}`}` to automatically construct path-friendly URL strings. Includes layered picture layouts.

### 5. `ShowcaseGrid.jsx`
* **Role**: Degree program visual gallery section.
* **Features**: Iterates through program options (such as Undergraduate and Graduate sectors) to create an absolute-positioned title overlay card layout.

### 6. `OurStudies.jsx`
* **Role**: Academic directory section.
* **Features**: Generates a fast-loading 2x4 cell interface matrix that lists specific structural course options and their descriptions.

### 7. `LabFacilities.jsx`
* **Role**: Campus facility showcase section.
* **Features**: Combines a high-impact background campus scene with a floating call-to-action text card template.

---

## 📈 Social Proof & Updates

### 8. `StatsSection.jsx`
* **Role**: Data milestone panel section.
* **Features**: Renders a clean index grid to present success numbers and institutional statistics to visitors.

### 9. `LatestNews.jsx`
* **Role**: Blog content repository section.
* **Features**: Combines thumbnail frames, metadata lines (author and date details), and typography hierarchies to build a 3-column blog section.

### 10. `InstagramFeed.jsx`
* **Role**: Social media placeholder grid section.
* **Features**: Displays user engagement by formatting recent picture inputs into a clean 4-column layout matrix complete with overlay icons on hover.