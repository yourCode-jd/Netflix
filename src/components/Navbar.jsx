import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Menu, User } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "TV Shows", href: "#" },
  { name: "Movies", href: "#" },
  { name: "New & Popular", href: "#" },
  { name: "My List", href: "#" },
];

function Navbar({ onSearch }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");

  // Scroll effect (your existing)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Search debounce (NEW)
  useEffect(() => {
    const delay = setTimeout(() => {
      if (onSearch) {
        onSearch(query);
      }
    }, 500);

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <>
      <div
        className={`fixed top-0 w-full flex justify-between items-center px-6 py-4 z-50 transition duration-300 ${
          scrolled ? "bg-black" : "bg-black/30 backdrop-blur-md"
        }`}
      >
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* MOBILE MENU BUTTON */}
          <button onClick={() => setIsOpen(true)} className="md:hidden">
            <Menu className="w-7.5 h-7.5 text-white" />
          </button>

          <h1 className="text-red-600! text-3xl! font-bold!">NETFLIX</h1>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-2 ml-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white uppercase text-sm hover:bg-red-600 px-3 py-1 rounded-sm transition-colors duration-300 ease-in-out cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2">
          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="hidden md:block bg-white px-3 py-1.5 rounded-full text-sm focus:outline-none"
          />

          {/* PROFILE */}
          <div className="w-8 h-8 md:bg-white bg-white/60  rounded-full">
            <User className="w-full h-full p-1.5 text-white md:text-black" />
          </div>
        </div>
      </div>

      {/* SIDEBAR */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Navbar;
