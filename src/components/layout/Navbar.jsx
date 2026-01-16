import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoSunny, IoMoon, IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setIsDarkMode(savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDarkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    setIsDarkMode(!isDarkMode);
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1b1b1b11] backdrop-blur z-50">
      <div className="flex justify-between items-center h-14 px-[5%] shadow-md">
        <NavLink to="/" className="orbitron font-bold italic text-2xl">
          Vishesh.
        </NavLink>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {["about", "skills", "certifications", "educations"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => handleNavClick(e, section)}
                className="hover:text-violet-600"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <NavLink to="/achievement" className="hover:text-violet-600">
              Achievements
            </NavLink>
          </li>
          <li>
            <NavLink to="/project" className="hover:text-violet-600">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-violet-600">
              Contact
            </NavLink>
          </li>

          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-slate-800 transition"
            >
              {isDarkMode ? (
                <IoSunny size={22} className="text-yellow-400" />
              ) : (
                <IoMoon size={22} className="text-slate-400" />
              )}
            </button>
          </li>
        </ul>

        {/* Mobile Icons */}
        <div className="flex items-center md:hidden gap-4">
          <button onClick={toggleTheme}>
            {isDarkMode ? (
              <IoSunny size={22} className="text-yellow-400" />
            ) : (
              <IoMoon size={22} />
            )}
          </button>

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden  px-[10%] py-4 flex flex-col gap-4">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          {["about", "skills", "certifications", "educations"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => handleNavClick(e, section)}
                className="hover:text-violet-600"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}<NavLink to="/achievement" onClick={() => setIsOpen(false)}>
            Achievements
          </NavLink>
          <NavLink to="/project" onClick={() => setIsOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;