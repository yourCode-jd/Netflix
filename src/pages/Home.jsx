import { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Row from "../components/Row";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

import {
  fetchTrending,
  fetchTopRated,
  fetchActionMovies,
  searchMovies,
} from "../services/api";

function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

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
      <div className="md:mt-10 mt-6 relative md:space-y-6 space-y-4">
        <Row
          title="Trending Now"
          fetchData={fetchTrending}
          showIndex
          onMovieClick={setSelectedMovie}
        />
        <Row
          title="Top Rated"
          fetchData={fetchTopRated}
          onMovieClick={setSelectedMovie}
        />
        <Row
          title="Action Movies"
          fetchData={fetchActionMovies}
          onMovieClick={setSelectedMovie}
        />
      </div>
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default Home;
