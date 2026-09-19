# React + Vite + Tailwind Template Boilerplate

This repository contains a custom, production-ready React application boilerplate built manually from scratch using Vite, ECMAScript Modules (ESM), Tailwind CSS, ESLint, and Prettier.

---

## 🚀 Features & Setup Summary

### 1. Initial Project Setup
* Initialized Node.js environment with `npm init`.
* Configured `package.json` by removing default `main: index.js`.
* Installed core dependencies: `react` and `react-dom`.
* Initialized Git repository with a `.gitignore` to exclude `node_modules`.

### 2. Vite & React Integration
* Installed `vite` and `@vitejs/plugin-react` as development dependencies.
* Switched project module type to ECMAScript Modules (`"type": "module"`) in `package.json`.
* Configured scripts in `package.json` for `dev`, `build`, and `preview`.
* Created standard directory layout (`public/` and `src/`).
* Created `index.html` with `#root` container and module script link.
* Created `vite.config.js` with `@vitejs/plugin-react`.
* Set up `src/main.jsx` to render `App.jsx` within `React.StrictMode`.
* Created initial `App.jsx` starter component UI.

### 3. Server Configuration & Styling Setup
* Configured custom development server port (`5175`) in `vite.config.js`.
* Created `src/index.css` for global styles and imported it into `src/main.jsx`.
* Created `src/App.css` with custom utility styles (`h1`, `.text`) and integrated it into `App.jsx`.

### 4. Tailwind CSS Integration
* Installed `tailwindcss` as a `devDependency`.
* Integrated `@tailwindcss/vite` plugin in `vite.config.js`.
* Imported Tailwind CSS directives in `src/index.css`.
* Applied Tailwind utility classes in `src/App.jsx`.

### 5. Custom Branding & Assets
* Added custom SVG icon (`icon.svg`) inside the `public/` directory.
* Updated `index.html` to include the new icon and title.

### 6. ESLint Integration & Code Linting
* Installed `eslint`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, and `globals` as devDependencies.
* Configured modern ESLint Flat Config in `eslint.config.js`.
* Integrated recommended linting rules for React, React Hooks, and React Refresh.

### 7. Prettier & Workspace Setup
* Installed `prettier`, `eslint-config-prettier`, and `eslint-plugin-prettier` as devDependencies to enforce code formatting standards and integrate seamlessly with ESLint.
* Created `.prettierrc` for project-wide formatting standards.
* Created `.prettierignore` to skip build artifacts and dependency folders.
* Configured workspace-level `.vscode/settings.json` for format-on-save integration.

---

## 🛠️ Tech Stack

* **Library:** React 19+
* **Build Tool:** Vite
* **Code Quality:** ESLint
* **Code Formatter:** Prettier
* **Styling:** Tailwind CSS v4 & Custom CSS
* **Module System:** ES Modules (ESM)

---

## 📁 Project Structure

```text
react-vite-tailwind-template/
├── .vscode/               # VS Code workspace configurations
│   └── settings.json      # Format-on-save & default formatter settings
├── public/                # Static assets
│   └── icon.svg           # Application favicon/icon
├── src/
│   ├── App.css            # Component styles
│   ├── App.jsx            # Root application component
│   ├── index.css          # Global styles with Tailwind directives
│   └── main.jsx           # Application entry point
├── .gitignore             # Git ignore rules
├── .prettierignore        # Prettier ignore patterns
├── .prettierrc            # Prettier configuration rules
├── eslint.config.js       # ESLint configuration file
├── index.html             # HTML entry document
├── package.json           # Node dependencies and scripts
├── README.md              # Project documentation
└── vite.config.js         # Vite & Tailwind configuration
```

---

## 📦 Getting Started

### Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### Installation

1. **Clone the repository:**
   `git clone https://github.com/yet-yuvi/react-vite-manual-setup`

2. **Navigate to the project directory:**
   `cd react-vite-manual-setup`

3. **Install dependencies:**
   `npm install`

4. **Start the development server:**
   `npm run dev`

5. Open your browser and navigate to `http://localhost:5175`.

---

## 📜 Available Scripts

* `npm run dev` — Runs the app in development mode at `http://localhost:5175`.
* `npm run build` — Builds the app for production to the `dist` folder.
* `npm run preview` — Previews the production build locally.
* `npm run lint` — Runs ESLint to analyze code quality and detect errors.
* `npm run format` — Runs Prettier to auto-format all supported files inside src/.