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
import { Routes, Route } from 'react-router-dom';


function LandingPage({ isLoaded }) {
  return (
    <>
      <Home isLoaded={isLoaded} />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}


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

    // <>
    //   {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

    //   <div
    //     className={`min-h-screen transition-opacity duration-700 ${
    //       isLoaded ? "opacity-100" : "opacity-0"
    //     } bg-[#060A14] text-white`}
    //   >
    //     {/* ✅ Keep Navbar always visible */}
    //     <Navbar
    //       menuOpen={menuOpen}
    //       setMenuOpen={setMenuOpen}
    //       isScrolled={isScrolled}
    //       setIsScrolled={setIsScrolled}
    //     />

    //     {/* ✅ Routes control which page content renders */}
    //     <Routes>
    //       <Route path="/" element={<LandingPage isLoaded={isLoaded} />} />
    //       {/* Add other pages here */}
    //       {/* <Route path="/projects" element={<ProjectsPage />} /> */}
          
    //     </Routes>

    //     {/* ✅ Keep Footer always visible */}
    //     <Footer />
    //   </div>
    // </>
  );
}

export default App;
