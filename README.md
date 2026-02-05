# SSN AI Summit 2026 Website

A Next.js website for the SSN AI Summit 2026 event, built with TypeScript and Tailwind CSS.

## Features

- 🎨 Beautiful blue-themed design matching the event brochure
- 📱 Fully responsive layout
- 🧭 Navigation bar with Event Highlights dropdown menu
- 🎯 Sections for Hero, Event Highlights, and Research Symposium
- 📄 Professional footer with contact information

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
AI_SUMMIT/
├── app/
│   ├── layout.tsx       # Root layout with navbar and footer
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation with dropdown
│   ├── Hero.tsx         # Hero section
│   ├── EventHighlights.tsx
│   ├── ResearchSymposium.tsx
│   └── Footer.tsx
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Event Information

- **Event**: SSN AI Summit 2026
- **Date**: March 25-28, 2026
- **Location**: SSN College of Engineering, Chennai
- **Website**: https://aissn.in/

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- React 18
