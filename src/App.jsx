import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "../src/index.css";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opeacity-0"
        } bg-[#060A14] text-white`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} isScrolled={isScrolled} setIsScrolled={setIsScrolled}/>
        <Home />
      </div>
    </>
  );
}

export default App;
