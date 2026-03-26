const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie, index, showIndex, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative md:min-w-52 min-w-44 md:h-72 h-60 shrink-0 group cursor-pointer"
    >
      {/* BIG NUMBER */}
      {showIndex && (
        <span className="absolute right-0 bottom-0 md:text-[120px]! text-[80px]! font-extrabold! text-black! [-webkit-text-stroke:2px_white] opacity-80 leading-none z-0">
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
