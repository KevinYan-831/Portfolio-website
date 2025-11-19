# Personal Portfolio Website

A modern, fully functional personal portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, responsive design, and a clean, professional aesthetic.

## Features

- **Modern Design**: Clean, minimalist interface with smooth animations
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-based reveal animations and interactive hover effects
- **Modular Architecture**: Well-organized component structure for easy maintenance
- **Fast Performance**: Built with Vite for lightning-fast development and optimized builds
- **Easy Customization**: Environment-based configuration for quick personalization

## Tech Stack

- **React 18** - Modern UI library
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent icons
- **Modern JavaScript (ES6+)** - Latest JavaScript features

## Project Structure

```
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── common/         # Reusable components
│   │   │   ├── ContactForm.jsx
│   │   │   ├── Marquee.jsx
│   │   │   ├── MobileMenu.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProjectRow.jsx
│   │   │   ├── RevealOnScroll.jsx
│   │   │   └── RevealText.jsx
│   │   └── sections/       # Page sections
│   │       ├── AboutSection.jsx
│   │       ├── ContactSection.jsx
│   │       ├── HeroSection.jsx
│   │       └── WorkSection.jsx
│   ├── hooks/              # Custom React hooks
│   │   ├── useElementOnScreen.js
│   │   └── useSmoothScroll.js
│   ├── utils/              # Utility functions and config
│   │   └── config.js
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── README.md              # This file
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download the repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (Optional)
   ```bash
   cp .env.example .env
   ```
   Edit `.env` to customize your personal information, contact details, and social media links.

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized production build will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization Guide

### Personal Information

Edit the `.env` file or directly modify the default values in `src/utils/config.js`:

```javascript
export const config = {
  personal: {
    fullName: 'Your Name',
    location: 'Your City',
    brandName: 'YOUR BRAND©'
  },
  contact: {
    email: 'your@email.com',
    phone: '+1 (555) 000-0000'
  },
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername'
  }
};
```

### Projects

Edit the projects array in `src/components/sections/WorkSection.jsx`:

```javascript
const projects = [
  {
    title: "Your Project Name",
    category: "Project Category",
    year: "2024"
  },
  // Add more projects...
];
```

### About Section

Modify the content in `src/components/sections/AboutSection.jsx` to update:
- Your bio/description
- Tech stack
- Capabilities

### Styling

- **Colors**: Modify Tailwind classes in components or extend in `tailwind.config.js`
- **Fonts**: Update font imports in `src/index.css`
- **Animations**: Customize animation timings and effects in individual components

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

This portfolio is optimized for performance:
- Lazy loading of components
- Optimized animations using CSS transforms
- Minimal bundle size with tree-shaking
- Fast page loads with Vite

## Future Enhancements

Potential features to add:
- [ ] Blog section with MDX support
- [ ] Dark mode toggle
- [ ] Backend integration for contact form
- [ ] Project detail pages
- [ ] Analytics integration
- [ ] CMS integration (Sanity, Contentful, etc.)
- [ ] PWA support
- [ ] Multi-language support

## License

MIT License - feel free to use this template for your own portfolio!

## Support

For issues, questions, or contributions, please open an issue or submit a pull request.

---

Built with ❤️ using React and Tailwind CSS
