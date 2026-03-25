import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { fetchTrending } from "../services/api";
import { LucideChevronsLeft, LucideChevronsRight } from "lucide-react";

function Row({ title }) {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef();

  useEffect(() => {
    fetchTrending().then((data) => setMovies(data));
  }, []);

  const scrollLeft = () => {
    rowRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="px-6 mt-6 relative group">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>

      {/* LEFT ARROW */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-red-600/80 p-2 opacity-0 group-hover:opacity-100 transition rounded-full"
      >
        <LucideChevronsLeft className="text-white" />
      </button>

      {/* ROW */}
      <div
        ref={rowRef}
        className="moviesRow flex gap-4 overflow-x-scroll scrollbar-hide"
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* RIGHT ARROW */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-red-600/80 p-2 opacity-0 group-hover:opacity-100 transition rounded-full"
      >
        <LucideChevronsRight className="text-white" />
      </button>
    </div>
  );
}

export default Row;
