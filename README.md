# Anubhav Singh - Self Introduction & Portfolio

A modern, responsive portfolio website showcasing my frontend development skills and projects.

## 🌐 Live Demo

**Vercel Deployment**: Coming soon...

**GitHub Repository**: https://github.com/Anubhav3024/self_intro

## 📋 About

This is a professional portfolio website built with modern web technologies. It showcases my projects, skills, experience, and allows visitors to download my resume and connect with me.

## 🚀 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI** - Built with Tailwind CSS and shadcn-ui components
- **Dark Mode Support** - Toggle between light and dark themes
- **Resume Download** - One-click resume download functionality
- **Social Links** - Connect via GitHub, LinkedIn, and email
- **Smooth Animations** - Engaging page transitions and animations
- **SEO Optimized** - Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

- **Frontend**: Vue 3, Vite, Pinia, Axios
- **Backend**: Node.js, Express
- **Database**: MongoDB (Atlas)
- **Styling**: Vanilla CSS (Premium Custom Design)
- **Deployment**: Vercel (Frontend), Backend (Self-hosted/Repl.it/etc)

## 💻 Getting Started

### Prerequisites

- Node.js & npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- Git for version control

### Installation

```sh
# Step 1: Clone the repository
git clone https://github.com/Anubhav3024/portfolio_1.git

# Step 2: Navigate to the project directory
cd portfolio_1

# Step 3: Install & Start Backend
cd portfolio-server
npm install
npm run dev

# Step 4: Install & Start Frontend (In a new terminal)
cd ../portfolio-client
npm install
npm run dev
```

The application will start at `http://localhost:5173` (Frontend) and `http://localhost:5000` (Backend)

## 📦 Available Scripts

```sh
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

This project is deployed on Vercel and automatically redeploys on every push to the main branch.

**Manual deployment:**

```sh
npm install -g vercel
vercel --prod
```

### Deploy to Other Platforms

- **Netlify**: Drag and drop the `dist` folder or connect your GitHub repo
- **GitHub Pages**: Configure in repository settings
- **Other Hosting**: Build the project (`npm run build`) and deploy the `dist` folder
