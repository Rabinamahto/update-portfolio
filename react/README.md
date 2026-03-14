# React Portfolio (converted)

This is a Vite + React conversion of your original HTML/CSS/JS portfolio.

Quick start:

1. Move the image files from the project root into the `react/public` folder:
   - `img.png` -> `react/public/img.png`
   - `Diploma.jpg` -> `react/public/Diploma.jpg`
   - `Rabina.png` -> `react/public/Rabina.png`

   (If you prefer to keep them elsewhere, update the paths in `src/App.jsx`.)

2. Install dependencies and run dev server:

```bash
cd react
npm install
npm run dev
```

3. Open the URL shown in the terminal (usually http://localhost:5173).

Notes and differences:

- The main page markup is inside `src/App.jsx` as React JSX.
- The certificate modal and image modal are implemented with React state (no direct DOM manipulation).
- Theme (dark-mode) persists to `localStorage`.
- I kept your main CSS in `src/App.css`. You can split it into smaller files or components if you want.

If you want, I can:
- Split the large `App.jsx` into smaller components (Header, Hero, About, etc.).
- Add routing (React Router) for separate pages.
- Help move the images into `react/public` for you.
