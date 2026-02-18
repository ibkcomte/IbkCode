# React + TypeScript + Vite

# 🚀 IbkCodes Portfolio | Engineering with Purpose

A high-performance, responsive portfolio built with a focus on smooth user experience, modern aesthetics (MBA-Hybrid branding), and clean code architecture.

---

##  The Aesthetic
The project utilizes a custom **Teal & Lime** color palette designed to bridge the gap between "Corporate Professional" and "Creative Engineer." 

- **Primary:** `#00CED1` (Teal) - Signifying trust and clarity.
- **Accent:** `Lime-400` - Signifying energy and action.
- **Glassmorphism:** Used for cards to create depth without clutter.

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **Form Handling** | Formspree API |
| **Deployment** | GitHub Actions |

##  Key Features

- **Dynamic Animations:** Staggered list entries and hover-reactive project cards using Framer Motion.
- **Responsive Architecture:** Mobile-first design using Tailwind's grid and flexbox systems.
- **Dark Mode Support:** Fully optimized slate-950 theme for night-time viewing.
- **Functional Contact Form:** Integrated with Formspree for real-time lead generation without a backend.
- **Type Safety:** 100% TypeScript for robust code and easier scaling.




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
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
       
      },
      
    },
  },
])
```
