import { Bookmark, Film, Tv, User } from "lucide-react";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-black/50 backdrop-blur-sm z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-7 right-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="p-6 flex flex-col gap-6">
          <h2 className="text-red-600! text-2xl! font-bold">NETFLIX</h2>

          <nav className="flex flex-col gap-4 text-gray-300">
            <a className="flex items-center gap-2 hover:text-white cursor-pointer">
              <User className="text-gray-500" width={16} /> Home
            </a>
            <a className="flex items-center gap-2 hover:text-white cursor-pointer">
              <Film className="text-gray-500" width={16} /> Movies
            </a>
            <a className="flex items-center gap-2 hover:text-white cursor-pointer">
              <Tv className="text-gray-500" width={16} /> TV Shows
            </a>
            <a className="flex items-center gap-2 hover:text-white cursor-pointer">
              <Bookmark className="text-gray-500" width={16} /> My List
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
