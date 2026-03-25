const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  if (!movie.poster_path) return null;
  return (
    <img
      src={`${IMAGE_BASE_URL}${movie.poster_path}`}
      alt={movie.title}
      className="min-w-50 h-64 object-cover rounded-lg hover:scale-105 transition duration-300 cursor-pointer"
    />
  );
}

export default MovieCard;
