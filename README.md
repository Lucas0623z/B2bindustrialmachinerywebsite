# B2B Industrial Machinery Website

A professional B2B website for industrial filtration and separation equipment, built with React, TypeScript, and Tailwind CSS.

## Features

- **11 Complete Pages**: Home, About, Products, Product Detail, Solutions, Industries, Technology, News, Careers, Contact, 404
- **Bilingual Support**: Full English/Chinese internationalization
- **Premium Animations**: Framer Motion powered smooth animations
- **Responsive Design**: Mobile-first, works perfectly on all devices
- **Modern Stack**: React 18, TypeScript, Vite, Tailwind CSS v4
- **UI Components**: shadcn/ui with Radix UI primitives
- **Type Safe**: Full TypeScript coverage

## Quick Start

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Lucas0623z/B2bindustrialmachinerywebsite.git
cd B2bindustrialmachinerywebsite

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
├── src/
│   ├── main.tsx                    # Application entry point
│   ├── app/
│   │   ├── App.tsx                 # Main app component
│   │   ├── routes.tsx              # Route configuration
│   │   ├── contexts/               # React contexts
│   │   ├── translations/           # i18n files (en, zh)
│   │   ├── hooks/                  # Custom React hooks
│   │   ├── components/
│   │   │   ├── layout/             # Header, Footer
│   │   │   ├── motion/             # Animation components
│   │   │   ├── figma/              # Image components
│   │   │   └── ui/                 # shadcn/ui components
│   │   └── pages/                  # Page components
│   └── styles/                     # Global styles
├── index.html                      # HTML entry point
├── vite.config.ts                  # Vite configuration
├── package.json                    # Dependencies
└── postcss.config.mjs              # PostCSS config
```

## Tech Stack

- **Framework**: React 18.3.1
- **Language**: TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.12
- **Router**: React Router 7.13.0
- **Animation**: Framer Motion 12.23.24
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React 0.487.0

## Available Scripts

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
```

## Internationalization

The website supports English and Chinese. Switch languages using the language selector in the header.

Translation files are located in:
- `src/app/translations/en.ts` - English translations
- `src/app/translations/zh.ts` - Chinese translations

## Design System

- **Primary Color**: Blue (#030213, #1e40af, #3b82f6)
- **Secondary Color**: Slate (#0f172a, #1e293b, #334155)
- **Typography**: System font stack
- **Components**: Custom-themed shadcn/ui components
- **Icons**: Lucide React icon library

## Pages Overview

1. **Home** - Hero section, product categories, company strengths, industries served, manufacturing capabilities
2. **About** - Company history, mission & values, team, certifications, journey timeline
3. **Products** - Product catalog with categories, filtering, and search
4. **Product Detail** - Individual product pages with specs, features, and inquiry form
5. **Solutions** - Industry-specific solutions for different sectors
6. **Industries** - Industries served with applications and challenges
7. **Technology** - Manufacturing facilities, R&D capabilities, quality control
8. **News** - Company news, product launches, industry insights
9. **Careers** - Job listings, company culture, application process
10. **Contact** - Contact form, office locations, business hours
11. **404** - Custom not found page

## Animation Features

The website includes premium animations powered by Framer Motion:
- Hero section layered entrance animations
- Scroll-triggered reveal animations
- Staggered list item animations
- Hover effects with smooth transitions
- Animated statistics counter
- Smooth page transitions

## Customization

### Update Content

Edit translation files in `src/app/translations/` to update text content.

### Modify Styling

Tailwind CSS classes are used throughout. Update `src/styles/tailwind.css` for global styles.

### Add New Pages

1. Create new page component in `src/app/pages/`
2. Add route in `src/app/routes.tsx`
3. Add translations in `src/app/translations/`

## Deployment

Build the project and deploy the `dist` folder to your hosting service:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project uses the following open-source libraries:
- React - MIT License
- Tailwind CSS - MIT License
- shadcn/ui - MIT License
- Radix UI - MIT License

---

Built using React, TypeScript, and Tailwind CSS
