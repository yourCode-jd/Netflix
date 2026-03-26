import { useEffect, useState } from "react";
import { X } from "lucide-react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieModal({ movie, onClose }) {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    if (!movie) return;

    // 🔒 Disable scroll
    document.body.style.overflow = "hidden";

    const fetchTrailer = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=YOUR_API_KEY`,
      );
      const data = await res.json();

      const trailer = data.results.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube",
      );

      if (trailer) setTrailerKey(trailer.key);
    };

    fetchTrailer();

    // 🔓 Enable scroll on close
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [movie]);

  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900 rounded-lg overflow-hidden max-w-2xl w-full relative">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-black/70 p-2 rounded-full"
        >
          <X className="text-white" />
        </button>

        {/* BACKDROP */}
        <div class="borderElement"></div>
        <img
          src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
          className="w-full md:h-72 h-48 object-cover"
        />

        {/* CONTENT */}
        <div className="p-4 space-y-3">
          <h2 className="text-2xl font-bold">{movie.title}</h2>

          <p className="text-sm! md:text-base! text-gray-300 h-26 md:h-auto md:overflow-hidden overflow-y-scroll">
            {movie.overview}
          </p>

          <p className="text-yellow-400">⭐ {movie.vote_average}</p>

          {/* TRAILER */}
          {trailerKey && (
            <iframe
              className="w-full h-64 mt-3 rounded"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="Trailer"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
