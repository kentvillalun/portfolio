import { useEffect } from "react";
import { MenuIcon } from "./icons/MenuIcon";
import { CloseIcon } from "./icons/CloseIcon";

export const MobileMenu = ({
  menuOpen,
  setMenuOpen,
  isScrolled,
  setIsScrolled,
}) => {
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
          href="#about"
          className="text-gray-300 hover:text-white transition-colors "
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>

        <a
          href="#projects"
          className="text-gray-300 hover:text-white transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </a>

        <a
          href="#skills"
          className="text-gray-300 hover:text-white transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Skills
        </a>

        <a
          href="#contact"
          className="text-gray-300 hover:text-white transition-colors "
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>

        <a
          href=""
          className="text-gray-300 hover:text-white transition-colors "
          onClick={() => setMenuOpen(false)}
        >
          Resume
        </a>
      </div>
    </div>
  );
};
