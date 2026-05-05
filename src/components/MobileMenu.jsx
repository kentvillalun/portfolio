import { useEffect } from "react";
import { MenuIcon } from "./icons/MenuIcon";
import { CloseIcon } from "./icons/CloseIcon";
import { useNavigate } from "react-router-dom";

export const MobileMenu = ({
  menuOpen,
  setMenuOpen,
  isScrolled,
  setIsScrolled,
}) => {
  const navigate = useNavigate();

  const handleNavClick = (id) => {
    navigate("/");
    setTimeout(() => {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div
      className={`absolute top-12 md:hidden left-0 z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out mt-3 min-w-full 
    ${
      menuOpen
        ? "opacity-100 pointer-events-auto scale-100"
        : "opacity-0 pointer-events-none scale-95"
    }

    ${isScrolled ? "p-0" : "p-2"}
    `}
    >
      <div className="bg-[#060A14] min-w-full rounded-lg flex flex-col gap-3 px-4 py-7 text-[16px] border-0.5 border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.4)]">
        <a
          className="text-white transition-colors hover:cursor-pointer"
          onClick={() => {
            setMenuOpen(false);
            handleNavClick("about");
          }}
        >
          About
        </a>

        <a
          className="text-white transition-colors hover:cursor-pointer"
          onClick={() => {
            setMenuOpen(false);
            handleNavClick("projects");
          }}
        >
          Projects
        </a>

        <a
          className="text-white transition-colors hover:cursor-pointer"
          onClick={() => {
            setMenuOpen(false);
            handleNavClick("skills");
          }}
        >
          Skills
        </a>

        <a
          className="text-white transition-colors hover:cursor-pointer"
          onClick={() => {
            setMenuOpen(false);
            handleNavClick("contact");
          }}
        >
          Contact
        </a>

        <a
          href="Kent-Villalun-Resume.pdf"
          className="text-white transition-colors hover:cursor-pointer"
          download
          onClick={() => setMenuOpen(false)}
        >
          Resume
        </a>
      </div>
    </div>
  );
};
