# Purpose Driven Global Website

## Project Overview

This repository contains the official website for Purpose Driven Global. The website serves as the digital platform for our global community, showcasing our mission, programs, impact stories, and providing resources for members and visitors.

## Tech Stack

- **Framework**: Next.js
- **Router**: App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: React Context API

## Current Status

The project is currently in development. We are building a responsive, accessible website with modern UI/UX principles and optimized performance.

## Project Structure

```
purpose-driven-global/
├── app/
│   ├── (auth)/
│   ├── (dashboard)/
│   ├── about/
│   ├── programs/
│   ├── resources/
│   ├── contact/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
│   ├── images/
│   └── favicon.ico
├── components/
│   ├── ui/
│   ├── layouts/
│   ├── forms/
│   └── sections/
├── lib/
│   ├── utils/
│   ├── hooks/
│   ├── constants/
│   └── api/
├── styles/
│   └── animations.css
├── .gitignore
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/purpose-drive-global/pdg-web-app.git
   cd pdg-web-app
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Contribution Guidelines

### Branch Workflow

1. **IMPORTANT**: No direct pushes to the `main` branch are allowed
2. Branch permissions have been set to restrict pushing to `main` - only the team lead has this permission
3. All work must be done on feature branches

### How to Contribute

1. Check the Issues tab for available tasks
2. Self-assign an issue you want to work on
3. Create a new branch named after the issue:

   ```bash
   git checkout -b feature/homepage-hero
   ```

4. Work on your assigned task
5. Commit your changes with meaningful commit messages:

   ```bash
   git commit -m "feat: implement responsive hero section"
   ```

6. Push your branch to the repository:

   ```bash
   git push origin feature/homepage-hero
   ```

7. Create a Pull Request (PR) to merge your branch into `main`
8. Wait for code review and address any requested changes
9. The team lead will merge your PR once approved

### Code Standards

- Follow TypeScript best practices
- Implement responsive designs using Tailwind CSS
- Ensure components are accessible (WCAG 2.1 AA compliance)
- Write clean, maintainable, and well-documented code
- Test your components before submitting a PR
- Use Next.js best practices for routing and data fetching

## Performance Standards

- Aim for 90+ Lighthouse scores
- Optimize image loading with Next.js Image component
- Implement proper code splitting
- Consider server components where appropriate

## Deployment

The website will be deployed automatically from the `main` branch using Vercel. Preview deployments are generated for each PR.

## Project Timeline

- **Phase 1**: Core website development (Current)
- **Phase 2**: Interactive community features
- **Phase 3**: Multilingual support and global resources

## Contact

For any questions or issues, please contact the Web Development Team Lead.

## Figma Design Link

<https://www.figma.com/design/EUOHQG3tKBpMHpAV55l3Nh/PDG?node-id=0-1&p=f&t=gghu4BrZgBZ9HVLa-0>
