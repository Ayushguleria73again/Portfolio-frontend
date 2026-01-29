# Portfolio Frontend

This is the premium frontend repository for the portfolio project, built with a focus on immersive UX and smooth interactivity.

## 🛠️ Tech Stack

*   **Framework**: [React 19](https://react.dev/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Icons**: [Lucide React](https://lucide.dev/)

## ✨ Key UI/UX Features

### 1. Editorial Project Grid
A sophisticated, vertical scrolling showcase for projects.
- **Parallax Imagery**: Smooth scaling and displacement effects on images.
- **Visual Contrast**: Integration of grayscale-to-color transitions and wide-tracking typography.
- **Dynamic Content**: Alternating layouts (Image-Right/Info-Left) for varied visual rhythm.

### 2. Immersive Interactivity
- **Magnetic Components**: Interactive elements (Logo, buttons, links) that subtly track the cursor for a tactile feel.
- **3D Tilt Cards**: Sophisticated spring-loaded 3D rotation on cards in the About section.
- **Custom Cursor**: A minimalist, scaling cursor that adapts to interactive regions.
- **Grain Texture Overlay**: A global animated noise texture for a vintage yet modern digital aesthetic.

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build

```bash
# Create production build
npm run build

# Preview build
npm run preview
```

## 📂 Directory Structure

*   `src/components/common`: Reusable UI components (Magnetic, Tilt, RippleButton).
*   `src/components/layout`: Global layout components (Navbar, Footer).
*   `src/components/sections`: Page-specific sections (Hero, About, Projects, Contact).
*   `src/pages`: Top-level page components.
*   `src/index.css`: Global styles and Tailwind configuration.
