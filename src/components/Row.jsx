import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { LucideChevronsLeft, LucideChevronsRight } from "lucide-react";

function Row({ title, fetchData, showIndex }) {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef();

  useEffect(() => {
    fetchData().then((data) => setMovies(data));
  }, [fetchData]);

  const scrollLeft = () => {
    rowRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="px-6 relative group/row">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>

      {/* ROW */}
      <div
        ref={rowRef}
        className="flex gap-4 overflow-x-scroll scrollbar-hide py-2"
      >
        {/* LEFT */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 translate-y-0 z-10 bg-red-600/80 rounded-full p-2 opacity-0 group-hover/row:opacity-100 transition hover:scale-110"
        >
          <LucideChevronsLeft className="text-white" />
        </button>

        {movies.map((movie, index) =>
          movie.poster_path ? (
            <MovieCard
              key={movie.id}
              movie={movie}
              index={index}
              showIndex={showIndex}
            />
          ) : null,
        )}

        {/* RIGHT */}
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 translate-y-0 z-10 bg-red-600/80 rounded-full p-2 opacity-0 group-hover/row:opacity-100 transition hover:scale-110"
        >
          <LucideChevronsRight className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default Row;
