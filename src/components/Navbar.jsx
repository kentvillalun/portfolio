import { useEffect } from "react";
import { MenuIcon } from "./icons/MenuIcon";
import { CloseIcon } from "./icons/CloseIcon";
import { MobileMenu } from "./MobileMenu";
import { useNavigate } from "react-router-dom";

export const Navbar = ({
  menuOpen,
  setMenuOpen,
  isScrolled,
  setIsScrolled,
}) => {
  const navigate = useNavigate();
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

  const handleNavClick = (id) => {
    navigate("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav
      className={`fixed z-40 bg-transparent md:rounded-full text-white inset-x-0  md:mx-auto transition-all duration-400 text-sm rounded-md border-transparent ease-in-out top-3
        ${
          isScrolled
            ? "top-4 bg-[rgba(0,0,0,0.25)] backdrop-blur-lg lg:max-w-4xl md:max-w-3xl m-6 border border-white/0 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.4)] "
            : "top-0 max-w-7xl"
        }
    `}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-row justify-between items-center h-12 md:mx-8 ">
          <a
            className="text-lg font-bold text-white hover:cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
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
              onClick={() => handleNavClick("about")}
              className="text-gray-300 hover:text-white transition-colors hover:cursor-pointer"
            >
              About
            </a>

            <a
              onClick={() => handleNavClick("projects")}
              className="text-gray-300 hover:text-white transition-colors hover:cursor-pointer"
            >
              Projects
            </a>

            <a
              onClick={() => handleNavClick("skills")}
              className="text-gray-300 hover:text-white transition-colors hover:cursor-pointer"  
            >
              Skills
            </a>

            <a
              onClick={() => handleNavClick("contact")}
              className="text-gray-300 hover:text-white transition-colors hover:cursor-pointer"
            >
              Contact
            </a>
          </div>
          <a
            className="hidden md:flex items-center py-1.5 px-4 rounded-lg bg-black cursor-pointer transform hover:-translate-y-0.5 shadow-lg border-white/10 border"
            download
            href="/portfolio/Kent-Villalun-Resume.pdf"
          >
            Resume
          </a>
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
