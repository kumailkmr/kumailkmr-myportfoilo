# Premium Digital Solutions Portfolio

A high-performance, conversion-focused portfolio and services website built for a Senior Software Engineer & UI/UX Architect. This repository serves as a master template for attracting high-ticket clients seeking AI automation, custom SaaS products, and premium web development.

## 🚀 Tech Stack

This project is engineered with modern, scalable, and production-ready technologies:

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [Lenis](https://lenis.studiofreight.com/) (Smooth Scrolling)
- **3D Graphics**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## ✨ Key Features

- **Premium UI/UX**: Glassmorphism, subtle gradients, and deep shadow hover effects designed for a high-end feel (inspired by Linear, Vercel, and Stripe).
- **Smooth Scrolling**: Buttery smooth page scrolling powered by Lenis.
- **Dynamic 3D Hero**: Integrated React Three Fiber canvas ready for interactive 3D models.
- **Comprehensive Sections**: 15 modular feature blocks including massively expanded, dynamically mapped `Services` and `Industries` components.
- **Fully Responsive**: Flawless execution across mobile, tablet, and desktop breakpoints.
- **Dark/Light Mode**: Seamless theme switching utilizing `next-themes`.

## 📂 Project Structure

```text
├── app/                  # Next.js App Router and global CSS
├── components/
│   ├── animations/       # Smooth scroll wrappers and transition components
│   ├── common/           # Providers (Theme, Tooltip, etc.)
│   ├── sections/         # The 15 core portfolio feature sections (Hero, About, Services, etc.)
│   ├── three/            # WebGL / Three.js canvas components
│   └── ui/               # shadcn/ui base components
├── lib/                  # Utility functions (cn, etc.)
├── public/               # Static assets (images, icons, models)
└── types/                # Global TypeScript definitions
```

## 🛠️ Getting Started

First, ensure you have `pnpm` installed.

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   pnpm run dev
   ```

3. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 🔒 Code Quality

The project enforces strict code quality standards:
- **Zero-Error TypeScript**: Fully typed components and props.
- **Strict Linting**: Configured with ESLint v9 (`pnpm run lint`).

---

*Engineered with precision for maximum conversion and performance.*
