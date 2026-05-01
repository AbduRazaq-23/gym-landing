// components/Navbar.jsx
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const sections = ["home", "features", "pricing", "testimonials", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false); // close mobile menu after click
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-white">
        {/* Logo */}
        <h1 className="font-bold text-xl cursor-pointer">GymFit</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {sections.map((sec) => (
            <li
              key={sec}
              onClick={() => scrollTo(sec)}
              className={`cursor-pointer capitalize transition ${
                active === sec
                  ? "text-green-400 border-b-2 border-green-400"
                  : "hover:text-green-300"
              }`}
            >
              {sec}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-md text-white px-6 py-6 space-y-4">
          {sections.map((sec) => (
            <div
              key={sec}
              onClick={() => scrollTo(sec)}
              className={`cursor-pointer capitalize ${
                active === sec ? "text-green-400" : ""
              }`}
            >
              {sec}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
