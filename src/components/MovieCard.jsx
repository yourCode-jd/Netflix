const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie, index, showIndex }) {
  return (
    <div className="relative min-w-52 h-72 shrink-0 group cursor-pointer">
      {/* BIG NUMBER */}
      {showIndex && (
        <span className="absolute right-0 bottom-0 text-[120px]! font-extrabold! text-black! [-webkit-text-stroke:2px_white] opacity-80 leading-none z-0">
          {index + 1}
        </span>
      )}
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-full object-cover rounded-lg transition duration-300 ease-out "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition rounded-lg flex items-end p-3">
        <p className="text-base text-white line-clamp-2">{movie.title}</p>
      </div>
    </div>
  );
}

export default MovieCard;
