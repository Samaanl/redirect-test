# Google Spuf

A clean Next.js website with a simple button that opens a specified link.

## Features

- **Clean Design**: Minimalist interface with a centered button
- **Responsive**: Works on all screen sizes
- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with Tailwind CSS
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Main page component
```

## Functionality

The website displays a single button in the center of the screen. When clicked, it opens the configured link in a new tab.

## Technologies Used

- [Next.js 14](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
