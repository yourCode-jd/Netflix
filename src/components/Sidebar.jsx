import React from "react";

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
        className={`fixed top-0 left-0 h-full w-72 bg-black z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-4"
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
          <h2 className="text-red-600 text-2xl font-bold">NETFLIX</h2>

          <nav className="flex flex-col gap-4 text-gray-300">
            <span className="hover:text-white cursor-pointer">Home</span>
            <span className="hover:text-white cursor-pointer">Movies</span>
            <span className="hover:text-white cursor-pointer">TV Shows</span>
            <span className="hover:text-white cursor-pointer">My List</span>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
