import { useEffect } from "react";
import { MenuIcon } from "./icons/MenuIcon";
import { CloseIcon } from "./icons/CloseIcon";
import { MobileMenu } from "./MobileMenu";

export const Navbar = ({
  menuOpen,
  setMenuOpen,
  isScrolled,
  setIsScrolled,
}) => {
  // useEffect(() => {
  //     document.body.style.overflow = menuOpen ? "hidden" : "";
  // }, [menuOpen])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-40 bg-transparent md:rounded-full text-white inset-x-0  md:mx-auto transition-all duration-400 text-sm rounded-md border-transparent ease-in-out top-3
        ${
          isScrolled
            ? "top-4 bg-[rgba(0,0,0,0.25)] backdrop-blur-lg max-w-3xl m-6 border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.4)] "
            : "top-0 max-w-7xl"
        }
    `}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-row justify-between items-center h-12 md:mx-2 ">
          <a className="text-lg font-bold text-white" href="#home">
            Kent
          </a>

          <div
            className="w-7 relative cursor-pointer z-40 md:hidden flex justify-center items-center"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
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
          <button className="hidden md:flex items-center py-1.5 px-4 rounded-lg bg-black cursor-pointer transform hover:-translate-y-0.5 shadow-lg border-white/10 border">
            Resume
          </button>
        </div>
      </div>

      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        isScrolled={isScrolled}
        setIsScrolled={setIsScrolled}
      />
    </nav>
  );
};
