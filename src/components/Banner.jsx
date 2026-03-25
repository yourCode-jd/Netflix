import { useEffect, useState } from "react";
import { fetchTrending } from "../services/api";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchTrending().then((data) => {
      const randomMovie = data[Math.floor(Math.random() * data.length)];
      setMovie(randomMovie);
    });
  }, []);

  if (!movie) return null;

  return (
    <div
      className="h-[80vh] text-white flex items-end"
      style={{
        backgroundImage: `url(${IMAGE_BASE_URL}${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full bg-linear-to-t from-black via-black/30 to-transparent p-6 flex items-end">
        <div className="max-w-lg mb-8">
          <h1 className="text-4xl font-bold mb-3">
            {movie.title || movie.name}
          </h1>

          <p className="text-base text-gray-300 line-clamp-3">
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
