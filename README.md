# Netflix Clone

A Netflix-style movie browsing UI built with React and the TMDB API — trending, top-rated, and action movie rows with horizontal scroll, live search, and a detail modal.

## Features

- **Browse by category** — Trending Now, Top Rated, and Action Movies rows, each pulling live data from TMDB
- **Horizontal scrolling rows** — smooth scroll-by-button navigation through each row
- **Live search** — search movies by title, results render as a responsive grid
- **Movie detail modal** — click any movie for a closer look
- **Reusable data-fetching pattern** — a single `Row` component handles fetching and rendering for every category via props, rather than duplicating logic per section

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- [TMDB API](https://www.themoviedb.org/documentation/api)
- lucide-react (icons)

## Live Demo

Coming soon — deployment is pending a fresh TMDB API key.

## Running Locally

1. Clone the repo:
   ```
   git clone https://github.com/yourCode-jd/Netflix.git
   cd Netflix
   npm install
   ```
2. Get a free API key from [TMDB](https://www.themoviedb.org/settings/api)
3. Copy `.env.example` to `.env` and add your key:
   ```
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   ```
4. Run the dev server:
   ```
   npm run dev
   ```

## Notes

The API key is read from an environment variable at build time (`import.meta.env.VITE_TMDB_API_KEY`) and is never committed to the repo.
