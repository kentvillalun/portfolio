import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "../src/index.css";
import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects"
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (!isLoaded) {
      // Disable scroll while loading
      root.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
    } else {
      // Restore scroll when loading completes
      root.style.overflow = '';
      body.style.overflow = '';
    }

    // Cleanup on unmount just in case
    return () => {
      root.style.overflow = '';
      body.style.overflow = '';
    };
  }, [isLoaded]);
  

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-[#060A14] text-white`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} isScrolled={isScrolled} setIsScrolled={setIsScrolled}/>

        <Home isLoaded={isLoaded} />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
