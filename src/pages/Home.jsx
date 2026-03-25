import { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Row from "../components/Row";
import MovieCard from "../components/MovieCard";

import {
  fetchTrending,
  fetchTopRated,
  fetchActionMovies,
  searchMovies,
} from "../services/api";

function Home() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    const results = await searchMovies(query);
    setSearchResults(results);
  };

  return (
    <div className="pb-16">
      <Navbar onSearch={handleSearch} />

      <Banner />

      {/* 🔥 SEARCH RESULTS */}
      {searchResults.length > 0 && (
        <div className="px-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Search Results</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {searchResults.map((movie) =>
              movie.poster_path ? (
                <MovieCard key={movie.id} movie={movie} />
              ) : null,
            )}
          </div>
        </div>
      )}

      {/* ORIGINAL ROWS (UNCHANGED) */}
      <div className="mt-10 relative space-y-6">
        <Row title="Trending Now" fetchData={fetchTrending} showIndex />
        <Row title="Top Rated" fetchData={fetchTopRated} />
        <Row title="Action Movies" fetchData={fetchActionMovies} />
      </div>
    </div>
  );
}

export default Home;
