# Animated-Assets

A modern monorepo containing Applivo - an AI-powered job application automation platform, along with supporting services.

![Applivo](https://img.shields.io/badge/Applivo-AI%20Job%20Automation-green)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)

## 🚀 Features

### Applivo - AI Job Application Automation
- **GPT-4o Powered**: Intelligent job matching and application generation
- **Automated Job Scraping**: Scrapes 4 major job platforms
- **Local Execution**: Runs quietly on your Windows PC
- **AES-256 Encrypted**: Your data stays secure
- **Auto-Apply**: Automatically submits applications

### Components
- Beautiful, animated landing page
- Job search and filtering
- Application tracking
- Resume generation
- Multi-platform support

## 📋 Prerequisites

- Node.js 18+
- pnpm 8+
- Windows 10/11 (for local execution)

## 🛠️ Installation

```bash
# Install pnpm if not already installed
npm install -g pnpm

# Install dependencies
pnpm instal
```

## 🏃‍♂️ Running Locally

This is a pnpm workspace with multiple projects:

### Development Mode

```bash
# Start all services (requires multiple terminals)
cd artifacts/applivo && pnpm dev      # Frontend: http://localhost:5173
cd artifacts/api-server && pnpm dev   # API: http://localhost:3000
cd artifacts/mockup-sandbox && pnpm dev # Mockup Sandbox: http://localhost:5174
```

Or use the individual run commands:

```bash
# API Server (Port 3000)
cd artifacts/api-server && set PORT=3000 && npx tsx ./src/index.ts

# Applivo Frontend (Port 5173)
cd artifacts/applivo && set PORT=5173 && set BASE_PATH=/ && npx vite --config vite.config.ts --host 0.0.0.0

# Mockup Sandbox (Port 5174)
cd artifacts/mockup-sandbox && set PORT=5174 && set BASE_PATH=/ && npx vite dev
```

## 📁 Project Structure

```
Animated-Assets/
├── artifacts/
│   ├── applivo/              # Main landing page & frontend
│   │   ├── src/
│   │   │   ├── components/   # React components
│   │   │   ├── pages/       # Page components
│   │   │   ├── hooks/       # Custom React hooks
│   │   │   └── lib/         # Utility functions
│   │   └── public/          # Static assets
│   ├── api-server/          # Express.js backend API
│   │   └── src/
│   │       ├── routes/      # API endpoints
│   │       ├── middlewares/  # Express middlewares
│   │       └── lib/         # Server utilities
│   └── mockup-sandbox/      # Mockup preview tool
├── lib/
│   └── api-client-react/   # Shared React API client
└── attached_assets/          # Project assets
```

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Radix UI
- React Query
- Lucide React

### Backend
- Node.js
- Express
- TypeScript

### Tools
- pnpm (package manager)
- Turborepo-like workspace structure

## 🔧 Environment Variables

### Applivo
- `PORT`: Server port (default: 5173)
- `BASE_PATH`: Base path for routing (default: /)

### API Server
- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment (development/production)

### Mockup Sandbox
- `PORT`: Server port (default: 5174)
- `BASE_PATH`: Base path for routing (default: /)

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🔗 Links

- [Applivo Website](https://applivo.com)
- [GitHub Repository](https://github.com/shanky-ux/applivo-frontend)

---

Built with ❤️ using React, TypeScript, and Vite
