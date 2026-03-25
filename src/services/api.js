const API_KEY = "6f0060e4af833643c068e717939e04e6";
const BASE_URL = "https://api.themoviedb.org/3";

export const searchMovies = async (query) => {
  if (!query) return [];

  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
  );
  const data = await res.json();
  return data.results;
};

export const fetchTrending = async () => {
  const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const fetchTopRated = async () => {
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const fetchActionMovies = async () => {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  );
  const data = await res.json();
  return data.results;
};
