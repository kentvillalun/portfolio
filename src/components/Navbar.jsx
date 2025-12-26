import { useEffect } from "react";
import { MenuIcon } from "./icons/MenuIcon";

export const Navbar = ({menuOpen, setMenuOpen}) => {


    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen])

  return (
    <nav className="fixed top-0 w-full z-40 bg-transparent text-white inset-x-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a className="text-xl font-bold text-white" href="#home">
            Kent
          </a>

          <div className="w-7 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev) }>
            <MenuIcon />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors "
            >
              About
            </a>

            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors "
            >
              Contact
            </a>
          </div>
          <button className="hidden md:flex items-center py-1.5 px-4 rounded-lg bg-black outline-0.5 outline-[#363636] cursor-pointer transform hover:-translate-y-0.5 shadow-lg">Resume</button>
        </div>
      </div>
    </nav>
  );
};
