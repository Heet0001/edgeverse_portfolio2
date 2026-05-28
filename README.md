# EdgeVerse Portfolio

The public-facing marketing site for EdgeVerse. Built with React + TypeScript +
Vite. Pulls editable content (hero/collision images, survey quote, technology
highlights, blog posts) from the EdgeVerse admin backend, with sensible static
fallbacks when the backend is offline.

## Quick start

```bash
npm install
npm run dev
```

Open <http://localhost:5173>.

## Environment variables

`.env`:

```bash
PORT=5173
VITE_API_BASE_URL=http://localhost:8000/api
VITE_API_ORIGIN=http://localhost:8000
```

## How content is wired

| Public section / page                   | Backend endpoint                  | Behaviour when offline                |
| --------------------------------------- | --------------------------------- | ------------------------------------- |
| Collision Alert Zones image             | `GET /api/home/public`            | Falls back to `assets/images/collision.png` |
| Two-Wheeler Safety Survey quote/author  | `GET /api/home/public`            | Falls back to the original static quote |
| News & Insights cards                   | `GET /api/blogs/public?limit=4`   | Falls back to the original 4 hard-coded cards |
| `/blog` listing                         | `GET /api/blogs/public`           | Shows an empty state                  |
| `/blog/:slug` detail                    | `GET /api/blogs/public/:slug`     | Shows a 404 layout                    |
| Contact form                            | `POST /api/messages/public`       | Shows an inline error                 |

All API calls live under `src/api/`.

## Available scripts

- `npm run dev` — start Vite dev server on port 5173
- `npm run build` — type-check + production build
- `npm run preview` — preview production build
- `npm run lint` — run ESLint

## Tech stack

- React 19, React Router 7
- Vite 8 (with `@vitejs/plugin-react`)
- Axios for API calls
- TypeScript 6
- SCSS modules for component styling
