import { useState } from "react";
import Sidebar from "./Sidebar";
import { User } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 w-full flex justify-between items-center px-6 py-4 z-50 bg-black/30 backdrop-blur-md">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* MOBILE MENU BUTTON */}
          <button onClick={() => setIsOpen(true)} className="md:hidden">
            <svg width="24" height="24" fill="white">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </button>

          <h1 className="text-red-600 font-bold text-2xl">NETFLIX</h1>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-6 ml-6 text-sm text-white">
            <span className="cursor-pointer hover:text-red-600 transition-all">
              Home
            </span>
            <span className="cursor-pointer hover:text-red-600 transition-all">
              Movies
            </span>
            <span className="cursor-pointer hover:text-red-600 transition-all">
              TV Shows
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2">
          {/* SEARCH (DESKTOP ONLY) */}
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block bg-white/60 px-3 py-1 rounded-full text-sm focus:outline-none"
          />

          {/* PROFILE */}
          <div className="w-7 h-7 bg-white/60  rounded-full">
            <User className="w-full h-full p-1 text-black" />
          </div>
        </div>
      </div>

      {/* SIDEBAR (MOBILE) */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Navbar;
