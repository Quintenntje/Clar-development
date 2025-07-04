# CLAR Communication Agency Website

A modern, interactive website for CLAR communication agency featuring advanced GSAP animations and responsive design.

## 🎯 Features

- **Advanced GSAP Animations**

  - Horizontal scroll testimonials with opacity transitions
  - Custom mouse cursor with blend-mode effects
  - Title fade-in animations with clip-path masking
  - Sticky title animations
  - Progressive fade-in effects

- **Modern UI/UX**
  - Responsive design
  - Interactive animations
  - Accessibility features (ARIA labels, skip navigation)
  - Custom cursor interactions

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- Web browser with modern CSS support

### Installation

1. Clone the repository

```bash
git clone https://github.com/pgmgent/clar-development-Quintenntje.git
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run watch
```

4. Build for production

```bash
npm run build
```

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Animations**: GSAP (GreenSock Animation Platform)
- **Build Tool**: Laravel Mix
- **Development**: Browser Sync for live reloading

## 📁 Project Structure

```
src/
├── scripts/
│   ├── animations/        # GSAP animation modules
│   │   ├── titleFadeIn.js
│   │   ├── horizontalScroll.js
│   │   ├── mouse.js
│   │   ├── itemStick.js
│   │   └── fadeIn.js
│   └── main.js           # Entry point
├── styles/
│   ├── components/       # Component styles
│   ├── layouts/          # Layout styles
│   └── main.css         # Main stylesheet
└── index.html           # Main HTML file
```

## ✨ Animation Features

- **Horizontal Testimonials**: Smooth horizontal scrolling with dynamic opacity
- **Custom Cursor**: Interactive cursor with blend modes
- **Title Animations**: Masked reveal animations on scroll
- **Sticky Elements**: Dynamic sticky positioning with scroll progress
- **Fade Effects**: Progressive element reveals

## 🎓 School Project

This project was developed as part of the PGM course at Artevelde University of Applied Sciences, demonstrating advanced web animation techniques and modern frontend development practices.

---

**Author**: Quinten Claes  
**Course**: PGM - Artevelde University of Applied Sciences
