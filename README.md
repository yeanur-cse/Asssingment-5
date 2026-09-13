# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
# 🚀 Dev Stack Builder

A responsive web application where users can explore different technologies and build their own development stack.

## 🛠️ Technologies Used

- React.js
- TypeScript
- Vite
- Tailwind CSS
- React-Toastify
- JSON

## ✨ Features

- Explore different technologies with details, ratings, and difficulty levels.
- Add technologies to your stack and remove individual items or remove all.
- Fully responsive design with toast notifications.

## 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX allows us to write HTML-like code inside JavaScript or TypeScript. It makes React UI easier to write and understand.

### 2. What is the difference between props and state?
Props are data passed from a parent component to a child component. State is data managed inside a component that can change and update the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` is used to store and update component data. I used it to manage the selected technologies in the Your Stack section.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` is used for side effects. I used it to load technology data from the JSON file when the application loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
A unique `key` helps React identify each item and efficiently update the list.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI based on a condition. I used it to show an empty message when no technology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data to a child through props. A child can send data back by calling a function passed from the parent through props.