# ByteSpace

A responsive online learning platform website built from a Figma design. It includes the full landing page along with login and signup pages.

**Live demo:** [https://bytespace-nayem.vercel.app/](https://bytespace-nayem.vercel.app/)

**Repository:** [github.com/shafikulnayem10/bytespace-new](https://github.com/shafikulnayem10/bytespace-new)

## Pages

| Route | Description |
|---|---|
| `/` | Landing page |
| `/login` | Login page |
| `/signup` | Signup page |

## Landing Page Sections

- Navbar
- Hero
- Brand logos
- Course categories
- Courses
- Learning paths
- Growth paths
- Creator call to action
- Testimonials
- Footer

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router, JavaScript)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) for icons
- `next/image` for optimized images
- Deployed on [Vercel](https://vercel.com/)

## Features

- Pixel-focused implementation of the Figma design
- Fully responsive layout for mobile, tablet, and desktop
- Reusable components (cards, buttons, layout sections, shared auth layout)
- Login and signup pages sharing a single `AuthLayout` component
- Accessible markup: labelled form fields, alt text, visible focus states

## Getting Started

### Prerequisites

- Node.js 
- npm

### Installation

```bash
git clone https://github.com/shafikulnayem10/bytespace-new.git
cd bytespace-new
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm run start
```

## Project Structure

```
bytespace-new/
  public/
    images/           
               
  src/
    app/
      page.js          Landing page
      login/           Login route
      signup/          Signup route
      layout.js        Root layout
      globals.css      Global styles
    components/
      layout/          Navbar, Footer
      sections/        Landing page sections
      auth/            AuthLayout, AuthIllustration, LoginForm, SignupForm, SocialButtons
      ui/              Reusable UI components
    data/
      courses.js       Course data
```

## Git Workflow

Work was done on separate feature branches and merged into `main` through pull requests:

- `feature/landing-page` for the landing page
- `feature/auth-pages` for the login and signup pages

## Notes for Reviewers

- The login and signup pages are UI only.There is no backend integration.
- All sections are built from the provided Figma design.
